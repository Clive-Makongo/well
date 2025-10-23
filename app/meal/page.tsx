"use client"
import { useMealContext, MealKey } from "@/context/meal-context";
import InputSection from "@/components/manual/meal/input-section";
import { Hero } from "@/components/manual/general/hero";
import { ErrorState } from "@/components/manual/meal/error-state";
import { MealPlanHeader } from "@/components/manual/meal/meal-plan-header";
import { MealGrid } from "@/components/manual/meal/meal-grid";
import { EmptyState } from "@/components/manual/meal/empty-state";
import { LoadingState } from "@/components/manual/meal/loading-state";

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
        mealType,
        mealImage,
        handleGenerateMeal,
        isFormValid,
        MEALS,
        chartProps
    } = useMealContext();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 w-full">
            <Hero
                title="Meal Planner"
                tag="Generate personalized meal plans tailored to your dietary needs and calorie goals"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
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
            </div>

            {error && <ErrorState error={error} />}

            {imagesLoaded && (
                <div className="max-w-7xl mx-auto px-1 sm:px-0 lg:px-8 py-8">
                    <MealPlanHeader calories={caloriesSet} diet={dietSet} />
                    <MealGrid
                        isMobile={isMobile}
                        mealImage={mealImage}
                        mealType={mealType}
                        chartProps={chartProps}
                        isLoading={isLoading}
                    />
                </div>
            )}

            {!imagesLoaded && !isLoading && <EmptyState />}
            {isLoading && <LoadingState />}
        </div>
    );
}