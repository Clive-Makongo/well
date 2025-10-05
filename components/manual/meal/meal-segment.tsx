import React, { ReactNode } from 'react'
import { MobileMeal } from '@/components/manual/meal/mobile-carousel'
import { DesktopMeal } from './desktop-meal'
import { MealSegmentProps } from './desktop-meal'
import { useMealContext } from '@/context/meal-context'

export default function MealSegment({ mealImage, mealType, chartProps, isLoading }: MealSegmentProps): ReactNode {
    const {isMobile} = useMealContext()
  return (
    <div>
          {isMobile ?
              <MobileMeal
                  mealImage={mealImage}
                  mealType={mealType}
              /> :
              <DesktopMeal
                  mealImage={mealImage}
                  mealType={mealType}
                  chartProps={chartProps}
                  isLoading={isLoading}
              />
          }
    </div>
  )
}
