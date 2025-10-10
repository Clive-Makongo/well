"use client"
import { ReactNode } from "react"
import { MealProvider } from "./meal-context"
import { WorkoutProvider } from "./workout-context"

export function Provider({ children }: { children: ReactNode }) {
    return (
        <MealProvider>
            <WorkoutProvider>
                {children}
            </WorkoutProvider>
        </MealProvider>
    )
}