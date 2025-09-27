"use client"
import { useState, useCallback, useEffect } from "react";
export interface MealType {
    breakfast: string;
    lunch: string;
    dinner: string;
}

export interface NutritionalInfo {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
}

export interface MealImage {
    breakfast: string;
    lunch: string;
    dinner: string;
}

export interface MealID {
    breakfast: number | null;
    lunch: number | null;
    dinner: number | null;
}

export interface ApiResponse {
    meals: { title: string; sourceUrl: string }[];
    nutrients: NutritionalInfo;
}

const API_KEY = process.env.NEXT_PUBLIC_KEY0;

export const useMealGenerate = () => {
    // Meal/nutrition state
    const [mealType, setMealType] = useState<MealType>({
        breakfast: "",
        lunch: "",
        dinner: "",
    });
    const [nutrition, setNutrition] = useState<NutritionalInfo>({
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        protein: 0,
    });

    const [mealImage, setMealImage] = useState<MealImage>({
        breakfast: "",
        lunch: "",
        dinner: "",
    });

    const [lastGeneratedParams, setLastGenereatedParams] = useState<{ calories: number, diet: string } | null>(null)

    const [mealId, setMealId] = useState<MealID>({ breakfast: null, lunch: null, dinner: null })

    const generateMeals = useCallback(
        async (calories: number, diet: string): Promise<ApiResponse | null> => {
            try {
                const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}&apiKey=${API_KEY}`,);

                const data = await response.json();
                setMealType({
                    breakfast: data.meals[0].title,
                    lunch: data.meals[1].title,
                    dinner: data.meals[2].title,
                });

                setNutrition({
                    calories: data.nutrients.calories,
                    carbohydrates: data.nutrients.carbohydrates,
                    protein: data.nutrients.protein,
                    fat: data.nutrients.fat,
                });

                setMealImage({
                    ...mealImage,
                    breakfast: `https://img.spoonacular.com/recipes/${data.meals[0].id}-312x231.jpg`,
                    lunch: `https://img.spoonacular.com/recipes/${data.meals[1].id}-312x231.jpg`,
                    dinner: `https://img.spoonacular.com/recipes/${data.meals[2].id}-312x231.jpg`,
                });

                setMealId({
                    breakfast: data.meals[0].id,
                    lunch: data.meals[1].id,
                    dinner: data.meals[2].id
                })

                setLastGenereatedParams({ calories, diet });

                return data;
            } catch (error) {
                console.error("Error generating meals:", error);
                throw error;
            }
        },
        []);
    
    return {
        mealType,
        nutrition,
        lastGeneratedParams,
        mealImage,
        mealId,
        setLastGenereatedParams,
        generateMeals,
        setMealImage

    };
};
