import React from "react";
import { CalorieInput } from "./calorie-input";
import { DietSelect } from "./diet-select";
import { GenerateButton } from "./generate-button";

interface InputSectionProps {
    caloriesSet: string;
    dietSet: string;
    setCalories: (val: string) => void;
    setDiet: (val: string) => void;
    isFormValid: () => boolean;
    isLoading: boolean;
    handleGenerateMeal: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
    caloriesSet,
    dietSet,
    setCalories,
    setDiet,
    isFormValid,
    isLoading,
    handleGenerateMeal,
}) => {
    return (
        <section className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CalorieInput 
                    value={caloriesSet}
                    onChange={setCalories}
                    disabled={isLoading}
                />
                <DietSelect 
                    value={dietSet}
                    onChange={setDiet}
                    disabled={isLoading}
                />
            </div>

            <div className="flex justify-end pt-2">
                <GenerateButton
                    onClick={handleGenerateMeal}
                    disabled={!isFormValid() || isLoading}
                    isLoading={isLoading}
                />
            </div>
        </section>
    );
};

export default InputSection;