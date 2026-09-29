import { NutritionResponse } from "@/types/meal/nutr-api";
import { z } from 'zod';

// Base schemas
export const NutritionalInfoSchema = z.object({
  calories: z.number(),
  carbohydrates: z.number(),
  fat: z.number(),
  protein: z.number(),
});

export const MealTypeSchema = z.object({
  breakfast: z.string(),
  lunch: z.string(),
  dinner: z.string(),
}).catchall(z.string()); // Allows additional string properties

export const MealImageSchema = z.object({
  breakfast: z.string(),
  lunch: z.string(),
  dinner: z.string(),
});

export const MealIDSchema = z.object({
  breakfast: z.number().nullable(),
  lunch: z.number().nullable(),
  dinner: z.number().nullable(),
});

export const GenApiResponseSchema = z.object({
  meals: z.array(
    z.object({
      title: z.string(),
      sourceUrl: z.string(),
    })
  ),
  nutrients: NutritionalInfoSchema,
});

export const MealNutritionSchema = z.object({
  breakfast: z.custom<NutritionResponse>().nullable(),
  lunch: z.custom<NutritionResponse>().nullable(),
  dinner: z.custom<NutritionResponse>().nullable(),
});

// Infer TypeScript types from schemas
export type NutritionalInfo = z.infer<typeof NutritionalInfoSchema>;
export type MealType = z.infer<typeof MealTypeSchema>;
export type MealImage = z.infer<typeof MealImageSchema>;
export type MealID = z.infer<typeof MealIDSchema>;
export type GenApiResponse = z.infer<typeof GenApiResponseSchema>;
export type MealNutrition = z.infer<typeof MealNutritionSchema>;