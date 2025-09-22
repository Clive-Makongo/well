"use client"
import Image from "next/image";
import { Card } from "@/components/ui/card";
import MealSegment from "@/components/manual/meal/meal-segment";
import InputSection from "@/components/manual/meal/input-section";
import { useMealContext } from "@/context/meal-context";


export default function Meal() {
  const {
        caloriesSet,
        dietSet,
        setCalories,
        setDiet,
        isLoading,
        error,
        isMobile,
        imagesLoaded,
        mealId,
        mealType,
        mealImage,
        mealNutrition,
        nutrition,
        handleGenerateMeal,
        isFormValid,
        MEALS,
        chartProps
  } = useMealContext();

  
  return (
      <div className="meal-page w-full">
          <div
              className="w-full h-20"
          >
              
          </div>
          <div
              className="p-6 w-full"
          >
              <InputSection
                    caloriesSet={caloriesSet}
                    dietSet={dietSet}
                    setCalories={setCalories}
                    setDiet={setDiet}
                    isFormValid={isFormValid}
                    isLoading={isLoading}
                    handleGenerateMeal={handleGenerateMeal}
                    
      />
          </div>
      

      <div className="font-sans grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center min-h-screen">
        {imagesLoaded && MEALS.map((meal, idx) => (
          <MealSegment
            key={meal}
            mealImage={mealImage[meal]}
            mealType={mealType[meal]}
            chartProps={chartProps[meal]}
            isLoading={isLoading}
          />
        ))}

        <button
          onClick={()=> {console.log(isMobile)}}
        >
          CLICK
        </button>
      </div>
    </div>
  );
}
