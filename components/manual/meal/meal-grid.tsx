import React from "react";
import { MobileMeal } from "./mobile-meal";
import { DesktopMeal } from "./desktop-meal";
import { MealImage, MealType } from "@/types/meal/meal";
import { ChartProps, PassedProps } from "@/types/meal/chart";
import { MealKey, MEALS } from "@/context/meal-context";

export interface MealGridProps {
    isMobile: boolean;
    mealImage: MealImage;
    mealType: MealType
    mealRecipe: MealType
    chartProps: PassedProps;
    isLoading: boolean;
    mobileChartProps?: ChartProps
}

export function MealGrid({ 
    isMobile,
    mealImage, 
    mealType,
    mealRecipe,
    chartProps, 
    isLoading 
}: MealGridProps) {
    if (isMobile) {
        return (
            <MobileMeal
                images={mealImage}
                meals={Object.keys(mealType) as MealKey[]}
                chartProps={chartProps}
                titles={mealType}
                mealRecipe={mealRecipe}
            />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEALS.map((meal: MealKey) => (
                <DesktopMeal
                    key={meal}
                    mealImage={mealImage[meal]}
                    mealType={mealType[meal]}
                    mealRecipe={mealRecipe[meal]}
                    chartProps={chartProps[meal]}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
}