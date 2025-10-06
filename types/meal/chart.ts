export interface ChartProps {
    calories: string | number;
    value: number[];
    label: string[];
}

export interface PassedProps {
    breakfast: ChartProps;
    lunch: ChartProps;
    dinner: ChartProps;
}