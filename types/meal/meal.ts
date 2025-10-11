import { NutritionResponse } from "@/types/meal/nutr-api";

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

export interface GenApiResponse {
    meals: { title: string; sourceUrl: string }[];
    nutrients: NutritionalInfo;
}

export interface MealNutrition {
    breakfast: NutritionResponse | null;
    lunch: NutritionResponse | null;
    dinner: NutritionResponse | null;
}