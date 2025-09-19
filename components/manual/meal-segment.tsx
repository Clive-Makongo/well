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
import React, {useState } from 'react'
import Modal from "react-responsive-modal"
import Chart from "@/components/manual/chart"
import 'react-responsive-modal/styles.css';

export interface ChartProps {
    calories: string | number;
    value: number[];
    label: string[];
}

interface MealSegmentProps {
    mealImage: string;
    mealType: string;
    chartProps: ChartProps;
    isLoading: boolean;
}

export default function MealSegment({mealImage, mealType, chartProps, isLoading}:MealSegmentProps ) {
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
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-500 text-white p-2 rounded text-sm font-medium"
                >
                    {mealType ? 'View Nutrition Info' : 'View Nutrition'}
                </button>
              </CardFooter>
          </Card>

          <Modal
                    classNames={{
                        overlay: "bg-black/50 fixed inset-0 flex items-center justify-center",
                        modal: "bg-white rounded-2xl shadow-xl p-6 w-96 max-w-full text-center",
                    }}
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                >
                    <h1>{mealType} - Calories: {chartProps.calories}</h1>
                    <Chart value={chartProps.value} label={chartProps.label} />
                </Modal>
    </div>
  )
}
