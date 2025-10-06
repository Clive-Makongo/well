import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Workout } from "@/types/workout/workout";
import Image from "next/image";

export function WorkoutCard(workout : Workout): ReactNode {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: workout.id});
    
    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            key={workout.id}
            className="cursor-grab p-4"
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}

        >
            <Image
                src={workout.Image}
                width={300}
                height={300}
                alt={workout.title}
            />
            <div>
                {workout.title}
            </div>
        </div>
    )
}