"use client"
import React, { ReactNode } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from './column';
import { useWorkoutContext } from '@/context/workout-context';
import { COL } from '@/types/workout/workout';
import { Hero } from '../general/hero';

const COLS: COL[] = [
    { id: 'Monday' }, 
    { id: 'Tuesday' }, 
    { id: 'Wednesday' }, 
    { id: 'Thursday' }, 
    { id: 'Friday' }, 
    { id: 'Exercises' }
];

export function Board(): ReactNode {
    const {workouts, handleDragEnd} = useWorkoutContext()
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-accent w-full p-6">
            <div className="max-w-[1600px] mx-auto space-y-6">
                {/* Header */}
                <Hero
                    title='Weekly Wokout Plan'
                    tag='Drag and drop exercises to schedule your week'
                />

                {/* Board */}
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 ">
                        {COLS.map((col) => (
                            <Column
                                key={col.id}
                                column={col}
                                workouts={workouts.filter((work) => work.status === col.id)}
                            />
                        ))}
                    </div>
                </DndContext>
            </div>
        </div>
    )
}