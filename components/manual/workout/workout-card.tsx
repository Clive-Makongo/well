import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Workout } from "@/types/workout/workout";
import Image from "next/image";

export function WorkoutCard({ workout }: { workout: Workout }): ReactNode {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: workout.id
    });
    
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`
                group relative bg-white rounded-lg border-2 border-gray-200 
                overflow-hidden cursor-grab active:cursor-grabbing
                hover:border-blue-400 hover:shadow-md
                transition-all duration-200
                ${isDragging ? 'opacity-50 shadow-xl scale-105 rotate-2' : 'opacity-100'}
            `}
            {...attributes}
            {...listeners}
        >
            {/* Image Section */}
            <div className="relative w-full aspect-video bg-gray-100">
                <Image
                    src={workout.Image}
                    fill
                    className="object-cover"
                    alt={workout.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                />
                
                {/* Drag indicator overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-2">
                    <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 8h16M4 16h16" 
                        />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                    {workout.title}
                </h4>
                
               
            </div>

           
        </div>
    )
}