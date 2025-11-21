import { z } from 'zod';
import { StaticImageData } from 'next/image';

// Column schema
export const COLSchema = z.object({
  id: z.string(),
});

// Workout schema
export const WorkoutSchema = z.object({
  id: z.number(),
  title: z.string(),
  status: z.string(),
  description: z.string(),
  Image: z.custom<StaticImageData>((val) => {
    // Basic validation for StaticImageData structure
    return (
      typeof val === 'object' &&
      val !== null &&
      'src' in val &&
      'height' in val &&
      'width' in val
    );
  }, "Invalid StaticImageData"),
});

// Column props schema
export const ColumnPropsSchema = z.object({
  column: COLSchema,
  workouts: z.array(WorkoutSchema),
});

// Infer TypeScript types
export type COL = z.infer<typeof COLSchema>;
export type Workout = z.infer<typeof WorkoutSchema>;
export type ColumnProps = z.infer<typeof ColumnPropsSchema>;