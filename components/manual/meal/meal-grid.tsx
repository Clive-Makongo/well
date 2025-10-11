import React from "react";
import { MobileMeal } from "./mobile-meal";
import { DesktopMeal } from "./desktop-meal";
import { MealImage, MealType } from "@/types/meal/meal";
import { ChartProps, PassedProps } from "@/types/meal/chart";
import { MealKey } from "@/context/meal-context";

export interface MealGridProps {
    isMobile: boolean;
    meals: MealKey[];
    mealImage: MealImage;
    mealType: MealType
    chartProps: PassedProps;
    isLoading: boolean;
    mobileChartProps?: ChartProps
}

export function MealGrid({ 
    isMobile, 
    meals, 
    mealImage, 
    mealType, 
    chartProps, 
    isLoading 
}: MealGridProps) {
    console.log(chartProps)
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
            {meals.map((meal: MealKey) => (
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