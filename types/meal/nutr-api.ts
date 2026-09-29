import { z } from 'zod';

// Base schemas (building blocks)
const NutrientDetailSchema = z.object({
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
  percentOfDailyNeeds: z.number(),
});

const NutritionItemSchema = z.object({
  title: z.string(),
  amount: z.string(),
  indented: z.boolean(),
  percentOfDailyNeeds: z.number(),
});

const PropertySchema = z.object({
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
});

const FlavonoidSchema = z.object({
  name: z.string(),
  amount: z.union([z.number(), z.string()]), // Can be either number or string
  unit: z.string(),
});

const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
  nutrients: z.array(NutrientDetailSchema),
});

const CaloricBreakdownSchema = z.object({
  percentProtein: z.number(),
  percentFat: z.number(),
  percentCarbs: z.number(),
});

const WeightPerServingSchema = z.object({
  amount: z.number(),
  unit: z.string(),
});

// Main nutrition response schema
export const NutritionResponseSchema = z.object({
  calories: z.string(),
  carbs: z.string(),
  fat: z.string(),
  protein: z.string(),
  bad: z.array(NutritionItemSchema),
  good: z.array(NutritionItemSchema),
  nutrients: z.array(NutrientDetailSchema),
  properties: z.array(PropertySchema),
  flavonoids: z.array(FlavonoidSchema),
  ingredients: z.array(IngredientSchema),
  caloricBreakdown: CaloricBreakdownSchema,
  weightPerServing: WeightPerServingSchema,
  expires: z.number(),
});

// Meal-specific nutrition schema
export const PNutritionResponseSchema = z.object({
  breakfast: NutritionResponseSchema.nullable(),
  lunch: NutritionResponseSchema.nullable(),
  dinner: NutritionResponseSchema.nullable(),
});

// Infer TypeScript types
export type NutrientDetail = z.infer<typeof NutrientDetailSchema>;
export type NutritionItem = z.infer<typeof NutritionItemSchema>;
export type Property = z.infer<typeof PropertySchema>;
export type Flavonoid = z.infer<typeof FlavonoidSchema>;
export type Ingredient = z.infer<typeof IngredientSchema>;
export type CaloricBreakdown = z.infer<typeof CaloricBreakdownSchema>;
export type WeightPerServing = z.infer<typeof WeightPerServingSchema>;
export type NutritionResponse = z.infer<typeof NutritionResponseSchema>;
export type PNutritionResponse = z.infer<typeof PNutritionResponseSchema>;