import React from "react";
import { COL } from "@/types/workout/workout";
import { Workout } from "@/types/workout/workout";
import { WorkoutCard } from "./workout-card";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
    column: COL;
    workouts: Workout[]
}

export function Column({ column, workouts }: ColumnProps): React.ReactElement {
    const { setNodeRef, isOver } = useDroppable({ id: column.id });

    const style = {
    color: isOver ? 'green' : undefined,
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
                <span className="border-black-500 rounded-xl p-2">{workouts.length}</span>
                <span>{column.id}</span>
                
            
           
            
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