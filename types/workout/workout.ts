import { StaticImageData } from 'next/image';

export interface COL {
    id: string;
}

export interface Workout {
    id: number;
    title: string;
    status: string;
    description: string;
    Image: StaticImageData
}

export interface ColumnProps {
    column: COL;
    workouts: Workout[]
}