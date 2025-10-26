import React from "react";

interface MealPlanHeaderProps {
    calories: number;
    diet: string;
}

export function MealPlanHeader({ calories, diet }: MealPlanHeaderProps) {
    return (
        <div className="mb-8 p-4 bg-background">
            <h2 className="text-2xl md:text-3xl font-med text-primary mb-2">
                Your Meal Plan
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <svg 
                        className="w-5 h-5 text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                        />
                    </svg>
                    <span className="text-primary">{calories} calories per day</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2">
                    <svg 
                        className="w-5 h-5 text-green-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                    <span className="text-primary">{diet || 'Balanced'} diet</span>
                </div>
            </div>
        </div>
    );
}