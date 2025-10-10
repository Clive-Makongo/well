"use client"
import React, { useState, createContext, useContext, ReactNode } from "react"
import { workoutOptions, Workout } from "@/utils/workout-options";
import { DragEndEvent } from "@dnd-kit/core";

interface WorkoutContextType {
    workouts: Workout[]
    handleDragEnd: (event: DragEndEvent) => void
}

const workoutContext = createContext<WorkoutContextType | null>(null)

export function WorkoutProvider({ children }:{children: ReactNode} ) {
    
    const [workouts, setWorkOuts] = useState<Workout[]>(workoutOptions);

   const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;

        if (!over) return

        const currentId = active.id as number
        const newStatus = over.id as Workout['status']

        console.log(`ACTIVE: ${active.id} OVER: ${over.id}`, workouts)

        setWorkOuts((prev) =>
            prev.map((workout) =>
                workout.id === currentId ?
                  {...workout,
                    status: newStatus
                    } 
                    : workout
            ) 
        )

        console.log(`STAT ${over.id} ${active.id}`)
    }

    const value = { workouts,  handleDragEnd }
    
    return (
        <workoutContext.Provider value={value}>
             {children}
        </workoutContext.Provider>
    )
}

export const useWorkoutContext = () => {
    const ctx = useContext(workoutContext);
    if (!ctx) {
        throw new Error(`useWorkoutContext must be used within a PageProvider`)
    }

    return ctx;
};
