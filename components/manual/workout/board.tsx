"use client"
import React, { useState, useEffect, act, ReactNode } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Column } from './column';
import { workoutOptions } from '@/utils/workout-options';
import { Workout } from '@/types/workout/workout';
import { useWorkoutContext } from '@/context/workout-context';
import { COL } from '@/types/workout/workout';

const COLS: COL[] = [{ id: 'Monday' }, { id: 'Tuesday' }, { id: 'Wednesday' }, { id: 'Thursday' }, { id: 'Friday' }, { id: 'Exercises' }];


export function Board(): ReactNode {
    const {workouts, handleDragEnd} = useWorkoutContext()
    useEffect(() => {
        //console.log(workouts)
    },[workouts])

 
    return (
        <DndContext
            onDragEnd={handleDragEnd}
        >
            {COLS.map((col, id) => (
                <Column
                    key={id}
                    column = { col }
                    workouts = {workouts.filter((work) => work.status === col.id)}
                />
                
            ))}
        </DndContext>
    )
}