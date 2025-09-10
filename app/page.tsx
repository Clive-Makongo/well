"use client"
import Image from "next/image";
import { Card } from "@/components/ui/card";
import MealSegment from "@/components/manual/MealSegment";
import InputSection from "@/components/manual/InputSection";
import { useMealContext } from "@/context/MealContext";


export default function Home() {
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
    <div>
      <InputSection
        caloriesSet={caloriesSet}
        dietSet={dietSet}
        setCalories={setCalories}
        setDiet={setDiet}
        isFormValid={isFormValid}
        isLoading={isLoading}
        handleGenerateMeal={handleGenerateMeal}
                    
      />

      <div className="font-sans grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center min-h-screen">
        {imagesLoaded && MEALS.map((meal, idx) => (
          <MealSegment
            key={meal}
            mealImage={mealImage[meal]}
            mealType={mealType[meal]}
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
