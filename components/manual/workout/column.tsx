import React, { ReactNode } from "react";
import { COL } from "@/types/workout/workout";
import { Workout } from "@/types/workout/workout";
import { WorkoutCard } from "./workout-card";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
    column: COL;
    workouts: Workout[]
}

export function Column({ column, workouts }: ColumnProps): ReactNode {
    const { setNodeRef, isOver } = useDroppable({ id: column.id });

    const style = {
    backgroundColor: isOver ? 'cyan' : undefined,
    };
    
    return (
        <div
            key={column.id}
            style={style}
            ref={setNodeRef}
            className=" h-120 w-30 rounded-lg bg-cyan-100 m-4"
        >
            <div
                className="flex flex-row justify-between"
            >
                <span className="p-4 font-bold">{column.id}</span>
                <span className="border-4 rounded-xl p-1">{workouts.length}</span>
            </div>
            
            {workouts.map((work) => (
                <WorkoutCard
                    key={work.id}
                    workout={work}
                />
            ))}
            
        </div>
    )
}