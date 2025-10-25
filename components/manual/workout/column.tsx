import React, { CSSProperties, ReactNode } from "react";
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

    const style: CSSProperties | undefined = {
    backgroundColor: isOver ? 'chart-2' : undefined,
    };

    const hoverColour = isOver ? 'bg-chart-2' : undefined;
    
    return (
        <div
            key={column.id}
            style={style}
            ref={setNodeRef}
            className={`${hoverColour} workout-column-droppable h-120 w-30 rounded-lg bg-background border-2 border-primary m-2`}
        >
            <div
                className="flex flex-row justify-between"
            >
                <span className="p-4 font-bold">{column.id}</span>
                <span className="border-1 border-primary rounded-xl p-1">{workouts.length}</span>
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