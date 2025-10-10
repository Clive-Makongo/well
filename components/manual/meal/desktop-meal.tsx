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
import React, {ReactNode, useState } from 'react'
import Modal from "react-responsive-modal"
import Chart from "@/components/manual/meal/chart"
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
    const [open, setOpen] = useState<boolean>(false);

    if (isLoading) {
        return (
            <div className="flex flex-col border-black border text-center meal-segment rounded-lg m-2 h-full">
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
      <div>
          <div>
              {chartProps &&
                  <button
                      onClick={() => console.log(chartProps)}
                  >
                      CHARTPROPS
                  </button>
              }
          </div>
          
          <Card>
              <CardHeader>
                  <CardTitle>
                      {mealType}
                  </CardTitle>
                  <CardDescription>
                      
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <Image
                      src={mealImage}
                      alt="Image did not load :("
                      width={180}
                      height={38}
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

          
    </div>
  )
}
