"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import React, {ReactNode } from 'react'
import { ChartModal } from "./chart-modal"
import 'react-responsive-modal/styles.css';

export interface ChartProps {
    calories: string | number;
    value: number[];
    label: string[];
}

export interface MealSegmentProps {
    mealImage: string;
    mealType: string;
    chartProps: ChartProps;
    isLoading: boolean;
}

export function DesktopMeal({mealImage, mealType, chartProps, isLoading}:MealSegmentProps ): ReactNode {

    if (isLoading) {
        return (
            <div className="flex flex-col border-primary text-center meal-segment rounded-lg m-2 h-full">
                <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                    <span className="text-gray-500">Loading...</span>
                </div>
                <div className="p-4">
                    <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
                    <div className="h-8 bg-gray-200 animate-pulse rounded"></div>
                </div>
            </div>
        );
    };


  return (
 
          <Card className="bg-background flex flex-col border-primary meal-segment rounded-lg m-2 h-full justify-evenly">
              <CardHeader>
                  <CardTitle>
                      {mealType}
                  </CardTitle>
                  <CardDescription>
                      
                  </CardDescription>
              </CardHeader>
              <CardContent>
              <Image
                  width={500}
                  height={500}
                    src={mealImage}
                    alt="Image did not load :("
                  priority
                  
                  />
              </CardContent>
              <CardFooter>
                  {chartProps && (
                      <ChartModal
                          calories={chartProps.calories}
                          value={chartProps.value}
                          label={chartProps.label}
                      />
                  )}
              </CardFooter>
          </Card>
  )
}
