"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {DndContext} from '@dnd-kit/core';
import { workoutOptions } from '@/utils/workout-options';
import { Droppable } from '@/components/manual/workout/droppable';
import { Draggable } from '@/components/manual/workout/draggable';
import { Board } from '@/components/manual/workout/board';

export default function Workout():React.ReactNode {
    return (
        <Board/>
    )
};