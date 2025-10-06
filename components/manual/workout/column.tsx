import React from "react";
import { COL, ColumnProps } from "@/types/workout/workout"; 
import { Workout } from "@/types/workout/workout"; 
import { WorkoutCard } from "./workout-card";
import { useDroppable } from "@dnd-kit/core";
import Image from "next/image";


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
            className=" h-120 w-20 bg-red-500 m-4"
        >
            {column.id}
            {workouts.map((work) => (
                <WorkoutCard
                    key={work.id}
                    workout={work}
                />
            ))}
            
        </div>
    )
}