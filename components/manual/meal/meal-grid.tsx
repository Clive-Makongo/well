import React from "react";
import { MobileMeal } from "./mobile-meal";
import { DesktopMeal } from "./desktop-meal";
import { MealImage } from "@/types/meal/meal";
import { ChartProps } from "@/types/meal/chart";

export interface MealGridProps {
    isMobile: boolean;
    meals: string[];
    mealImage: MealImage[];
    mealType: string[]
    chartProps: ChartProps;
    isLoading: boolean;
}

export function MealGrid({ 
    isMobile, 
    meals, 
    mealImage, 
    mealType, 
    chartProps, 
    isLoading 
}: MealGridProps) {
    if (isMobile) {
        return (
            <MobileMeal
                images={mealImage}
                meals={meals}
                chartProps={chartProps}
                titles={mealType}
            />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
                <DesktopMeal
                    key={meal}
                    mealImage={mealImage[meal]}
                    mealType={mealType[meal]}
                    chartProps={chartProps[meal]}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
}