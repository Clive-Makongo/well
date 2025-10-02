"use client"
import React, { useState, useEffect, act } from 'react';
import { StaticImageData } from 'next/image';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Column } from './column';
import {workoutOptions, Workout } from '@/utils/workout-options';
import { Droppable } from '@/components/manual/workout/droppable';
import { Draggable } from '@/components/manual/workout/draggable';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

 export interface COL {
    id: string;
}
interface DragElement {
    id: number;
    img: StaticImageData;
    title: string;
    status: string;
    description: string;
}

interface Container {
    id: string;
    day: string;
    parent: boolean;
    content: DragElement[];
}

const COLS: COL[] = [{ id: 'Monday'}, {id: 'Tuesday'}, {id: 'Wednesday'}, {id: 'Thursday'}, {id: 'Friday'},{id: 'Exercises'}];


export function Board(): React.ReactNode {
    const [workouts, setWorkOuts] = useState<Workout[]>(workoutOptions);

    useEffect(() => {
        console.log(workouts)
    },[workouts])

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;

        if (!over) return

        const currentId = active.id as number
        const newStatus = over.id as string

        console.log(`ACTIVE: ${active.id} OVER: ${over.id}`, workouts,)

        setWorkOuts(() =>
            workouts.map((workout) =>
                workout.id === currentId ?
                  {...workout,
                    status: newStatus
                    } 
                    : workout
            ) 
        )

        console.log(`STAT ${over.id} ${active.id}`)
    }
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