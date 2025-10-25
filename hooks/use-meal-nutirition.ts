"use client"
import { useState, useCallback, useEffect } from "react";
import type { MealID } from "@/types/meal/meal";
import type { NutritionResponse, PNutritionResponse } from "@/types/meal/nutr-api";
import type { PassedProps } from "@/types/meal/chart";


const API_KEY = process.env.NEXT_PUBLIC_KEY0;

const get = async (mealID: number): Promise<NutritionResponse | null> => { 
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${mealID}/nutritionWidget.json?apiKey=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching meals:', error);
        return null;
    }
}

export const useMealNutrition = () => {
    const [mealNutrition, setMealNutrition] = useState<PNutritionResponse>({
        breakfast: null,
        lunch: null,
        dinner: null
    });
    const [chartProps, setChartProps] = useState<PassedProps>({ 
        breakfast: { calories: 0, value: [], label: [] }, 
        lunch: { calories: 0, value: [], label: [] }, 
        dinner: { calories: 0, value: [], label: [] } 
    });

    const extractNutrients = (mealData: NutritionResponse | null) => {
        if (!mealData) {
            return { values: [], labels: [] };
        }

        const nutrients = Object.entries(mealData.nutrients);
        const filtered = nutrients.filter(([key, nutrient]: [string, any]) =>
            nutrient.unit === 'g' && nutrient.name !== "Net Carbohydrates"
        );

        return {
            values: filtered.map(([key, nutrient]) => nutrient.amount),
            labels: filtered.map(([key, nutrient]) => nutrient.name)
        };
    };

   
    useEffect(() => {
    // Check if all meals are null/undefined
        if (!mealNutrition.breakfast && !mealNutrition.lunch && !mealNutrition.dinner) {
        return;
    }

    // Extract for each meal
    const breakfast = extractNutrients(mealNutrition.breakfast);
    const lunch = extractNutrients(mealNutrition.lunch);
    const dinner = extractNutrients(mealNutrition.dinner);
        
        

    setChartProps({
        breakfast: {
            calories: mealNutrition.breakfast?.nutrients[0]?.amount || 0,
            value: breakfast.values,
            label: breakfast.labels
        },
        lunch: {
            calories: mealNutrition.lunch?.nutrients[0]?.amount || 0,
            value: lunch.values,
            label: lunch.labels
        },
        dinner: {
            calories: mealNutrition.dinner?.nutrients[0]?.amount || 0,
            value: dinner.values,
            label: dinner.labels
        }
    });
}, [mealNutrition]);

    const getMealNutrients = useCallback(async (mealId: MealID) => {
        if (mealId.breakfast != null && mealId.lunch != null && mealId.dinner != null) {
            const [breakfast, lunch, dinner] = await Promise.all([
                get(mealId.breakfast),
                get(mealId.lunch),
                get(mealId.dinner)
            ]);

            // Only update if all requests succeeded
            if (!breakfast || !lunch || !dinner) {
                console.error('Failed to fetch some meal nutrition data');
                return;
            }
            setMealNutrition({
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner
            });
        }
    }, []);

    const resetNutrition = useCallback(() => {
        setMealNutrition({
            breakfast: null,
            lunch: null,
            dinner: null,
        });
    }, []);

    return {
        mealNutrition,
        chartProps,
        getMealNutrients,
        resetNutrition
    };
};