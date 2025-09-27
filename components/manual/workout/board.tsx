"use client"
import React, { useState, useEffect, useCallback } from 'react';
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
    content: [] | null
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

   const Board = useCallback((): React.ReactElement => {
    const renderDragElements = () => (
        workoutOptions.map((drag, index) => (
            <Draggable
                key={index}
                id={index}
            >
                <Image
                    src={drag.Image}
                    width={30}
                    height={30}
                    alt={drag.title}
                />
            </Draggable>
        ))
    );

    const renderDropZones = () => (
        parent
            .filter(box => box.day !== '')
            .map((box, index) => (
                <Droppable
                    key={index}
                    id={index}
                >
                    <div className='h-120 m-3 bg-red-300 w-full'>
                        {box.day}
                    </div>
                </Droppable>
            ))
    );

    return (
        <div className="board-container flex flex-row">
            <div className="drag-elements-section">
                {renderDragElements()}
            </div>
            <div className="drop-zones-section flex flex-row">
                {renderDropZones()}
            </div>
        </div>
    );
   }, [parent]);
    
    const toggleParent = (id: number) => {
        console.log(id, parent[id], parent, " Toggle")
        setParent(prev =>
            prev.map((day, index) => 
                id === index ? {...day, parent: !day.parent} : day
            )
        )
    }


    function handleDragEnd(event)  {
        const { over, active } = event;
        toggleParent(over.id)
        console.log(event, active, " ACTIVE ", over, " OVER")  

    }

    useEffect(() => {
        
        console.log(parent, " Drag")
    },[parent])
    
    return (
        <DndContext
            onDragEnd={handleDragEnd}
        >
           {Board()}
        </DndContext>
    )
    
}

