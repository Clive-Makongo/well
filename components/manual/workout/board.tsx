"use client"
import React, { useState, useEffect } from 'react';
import {StaticImageData} from 'next/image';
import {DndContext} from '@dnd-kit/core';
import { workoutOptions } from '@/utils/workout-options';
import { Droppable } from '@/components/manual/workout/droppable';
import { Draggable } from '@/components/manual/workout/draggable';
import Image from 'next/image';


interface DragElement {
    id: number;
    img: StaticImageData;
    title: string;
    description: string;
}

interface Displayed {
    id: number | string;
    content: DragElement | string;
}

interface Container {
    day: string;
    parent: boolean;
    content: React.ReactNode | null
}

const CONTAINER: Container[] = [
    { day: 'Monday', parent: false, content: null },
    { day: 'Tuesday', parent: false, content: null },
    { day: 'Wednesday', parent: false, content: null },
    { day: 'Thursday', parent: false, content: null },
    { day: 'Friday', parent: false, content: null },
    {day: '', parent: true, content: workoutOptions}
];

// need to display the element inside the column when dropped



export function Board(): React.ReactNode {
    const [parent, setParent] = useState<Container[]>(CONTAINER);

    const toggleParent = (id: number) => {
        console.log(id, parent[id], " Toggle")
        setParent(prev =>
            prev.map((day, index) => 
                id === index ? {...day, parent: !day.parent} : day
            )
        )
    }

    useEffect(() => {
        
        console.log(parent, " Drag")
    },[parent])
    
    return (
        <DndContext
            onDragEnd={handleDragEnd}
        >
            {workoutOptions.map((work, id) => (
                <Draggable
                    key={id}
                    id={id}
                >
                    <Image
                        src={work.Image}
                        width={300}
                        height={300}
                        alt={work.title}
                    />
                </Draggable>
            ))}
            {parent.map((parent, id) => (
                <Droppable
                    key={id}
                    id={id}
                >
                    <div
                        className='w-14 h-80 bg-red-300 p-4 m-4'
                    >
                        {parent.parent === false ? parent.day : ''}
                    </div>
                </Droppable>
            ))}
        </DndContext>
    )

    function handleDragEnd(event)  {
        const { over, active } = event;
        console.log(event, active, " ACTIVE ", over, " OVER")        
        toggleParent(over.id)
    }

    
}