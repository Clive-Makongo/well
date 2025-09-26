import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { useEffect } from 'react';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform, active} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}