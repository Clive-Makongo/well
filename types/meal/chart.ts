import { z } from 'zod';

// Chart props schema
export const ChartPropsSchema = z.object({
  calories: z.union([z.string(), z.number()]),
  value: z.array(z.number()),
  label: z.array(z.string()),
});

// Passed props schema (all three meals)
export const PassedPropsSchema = z.object({
  breakfast: ChartPropsSchema,
  lunch: ChartPropsSchema,
  dinner: ChartPropsSchema,
});

// Infer TypeScript types
export type ChartProps = z.infer<typeof ChartPropsSchema>;
export type PassedProps = z.infer<typeof PassedPropsSchema>;