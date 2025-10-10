"use client"
import { useState, useCallback, useEffect, useMemo } from "react";
import type { MealID, MealNutrition } from "@/types/meal/meal";
import type { NutritionResponse } from "@/types/meal/nutr-api";
import type { PassedProps } from "@/types/meal/chart";

const API_KEY = process.env.NEXT_PUBLIC_KEY0;

const get = async (mealID: number): Promise<NutritionResponse> => { 
    // const response = await fetch(`https://api.spoonacular.com/recipes/${mealID}/nutritionWidget.json?apiKey=${API_KEY}`);
    // const data = await response.json()
    // console.log("DATA: ", data)
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${mealID}/nutritionWidget.json?apiKey=${API_KEY}`);

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

         const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching meals:', error);
        return { error }
    }

}

export const useMealNutrition = () => {
    const [mealNutrition, setMealNutrition] = useState<MealNutrition>({
        breakfast: [],
        lunch: [],
        dinner: []
    });
    const [chartProps, setChartProps] = useState<PassedProps>({ breakfast: { calories: 0, value: [], label: [] }, lunch: { calories: 0, value: [], label: [] }, dinner: { calories: 0, value: [], label: [] } });

    const extractNutrients = (mealData: any) => {
        const nutrients = Object.entries(mealData.nutrients);
        const filtered = nutrients.filter(([key, nutrient]: [string, any]) =>
            nutrient.unit === 'g' && nutrient.name !== "Net Carbohydrates"

        );

        return {
            values: filtered.map(([key, nutrient]) => nutrient.amount),
            labels: filtered.map(([key, nutrient]) => nutrient.name)
        };
    };


    const processedChartData = useMemo(() => {
        if (!mealNutrition?.breakfast?.nutrients) {
            return { value: [], label: [], calories: 0 };
        }

        // Extract for each meal
        const breakfast = extractNutrients(mealNutrition.breakfast);
        const lunch = extractNutrients(mealNutrition.lunch);
        const dinner = extractNutrients(mealNutrition.dinner);

        const breakfastValues = breakfast.values;
        const breakfastLabels = breakfast.labels;
        const lunchValues = lunch.values;
        const lunchLabels = lunch.labels;
        const dinnerValues = dinner.values;
        const dinnerLabels = dinner.labels;

        setChartProps({
            breakfast: {
                calories: mealNutrition.breakfast.nutrients[0]?.amount || 0,
                value: breakfastValues,
                label: breakfastLabels
            },
            lunch: {
                calories: mealNutrition.lunch.nutrients[0]?.amount || 0,
                value: lunchValues,
                label: lunchLabels
            },
            dinner: {
                calories: mealNutrition.dinner.nutrients[0]?.amount || 0,
                value: dinnerValues,
                label: dinnerLabels
            }
        })

        // return [[breakfastLabels, breakfastValues], [lunchLabels, lunchLabels, lunchValues], [dinnerLabels, dinnerValues]]

    }, [mealNutrition]);


    const getMealNutrients = useCallback(async (mealId: MealID) => {
        if (mealId.breakfast != null && mealId.lunch != null && mealId.dinner != null) {
            const [breakfast, lunch, dinner] = await Promise.all([
                get(mealId.breakfast),
                get(mealId.lunch),
                get(mealId.dinner)
            ])


            setMealNutrition({
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner
            })
        }
    }, [])

    useEffect(() => {
        //console.log(mealNutrition)
    }, [processedChartData, chartProps, mealNutrition]);

    const resetNutrition = useCallback(() => {
        setMealNutrition({
            breakfast: [],
            lunch: [],
            dinner: [],
        });
    }, []);

    return {
        mealNutrition,
        chartProps,
        getMealNutrients,
        resetNutrition
    };
};
