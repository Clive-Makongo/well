"use client"
import React from "react";
import { Button } from "../ui/button";

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
        <section className="inputs flex flex-col justify-evenly w-full mb-6 gap-4 mx-auto">
            {/* Calories Input */}
            <div className="flex flex-row justify-between">
                <label htmlFor="calories" className="text-sm font-medium mb-1">
                    Calories (1-3000)
                </label>
                <input
                    id="calories"
                    className="set-calories border-2 border-black rounded-lg px-3 py-2 w-1/2"
                    type="number"
                    min="1"
                    max="5000"
                    placeholder="2000"
                    onChange={(e) => setCalories(e.target.value)}
                    value={caloriesSet}
                    disabled={isLoading}
                />
            </div>

            {/* Diet Input */}
            <div className="flex flex-row justify-between">
                <label htmlFor="diet" className="text-sm font-medium mb-1 w-16">
                    Diet Type
                </label>
                <input
                    id="diet"
                    className="set-diet border-2 border-black rounded-lg px-3 py-2 w-1/2"
                    type="text"
                    placeholder="Mediterranean"
                    onChange={(e) => setDiet(e.target.value)}
                    value={dietSet}
                    disabled={isLoading}
                />
            </div>

            {/* Button */}
            <div className="flex flex-row justify-end">
                
                <Button
                    onClick={handleGenerateMeal}
                    disabled={!isFormValid() || isLoading}
                >
                    
                    {isLoading ? "Generating..." : "Generate Meals"}
                </Button>
            </div>
        </section>
    );
};

export default InputSection;
