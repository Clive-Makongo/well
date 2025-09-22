"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {DndContext} from '@dnd-kit/core';
import { workoutOptions } from '@/utils/workout-options';
import { Droppable } from '@/components/manual/workout/droppable';
import { Draggable } from '@/components/manual/workout/draggable';

const content: Record<string, boolean> = {}
const containers = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Workout():React.ReactNode {
    const [dragArr, setDradArr] = useState<React.ReactNode[]>([])
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
        workoutOptions.map((work, id) => (
            <Draggable key={id} id={id}>
                
                <div>{ work.title}</div>
          </Draggable>
            
        ))
    
    );
    
    useEffect(() => {
        console.log(draggableMarkup, " PARENT")
        setDradArr([<Draggable key={0} id={0}>
                
                <div>hello</div>
        </Draggable>])
        console.log(dragArr, " PARENT")
    }, [])

    return (
        <>
            
    <DndContext onDragEnd={handleDragEnd}>
                {parent === null ? 'draggableMarkup' : null}
                
                {workoutOptions.map((work, id) => (
                    <Draggable id={id}>
                        <Image
                            className='m-12'
                            key={work.id}
                            src={work.Image}
                            height={3000}
                            width={3000}
                            alt={work.title}
                />                            
                    </Draggable>
        ))}

      {containers.map((day,id) => (
          <Droppable key={id} id={id}>
              <div
              className='h-12 w-12 bg-red-300 m-20'
          >
                  {parent === id ? 'draggableMarkup' : day}
                  
              </div>
        </Droppable>
            
      ))}
            </DndContext>
            
        </>
  );

  function handleDragEnd(event) {
      const { over } = event;
      console.log(event, " EVENTT");

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};