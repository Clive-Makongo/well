import React from "react";
import { Button } from "../../ui/button";

interface GenerateButtonProps {
    onClick: () => void;
    disabled: boolean;
    isLoading: boolean;
}

export function GenerateButton({ onClick, disabled, isLoading }: GenerateButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`
                px-8 py-3 rounded-lg font-semibold text-base
                transition-all duration-200
                ${disabled
                    ? 'bg-primary-foreground text-muted-foreground cursor-not-allowed'
                    : 'text-white sm:bg-primary hover:bg-primary sm:text-input hover:scale-101 hover:shadow-sm active:scale-95'
                }
            `}
        >
            {isLoading ? (
                <span className="flex items-center gap-2">
                    <svg 
                        className="animate-spin h-5 w-5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                        />
                        <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Generating...
                </span>
            ) : (
                <span className="flex items-center gap-2">
                    Generate Meal Plan
                </span>
            )}
        </Button>
    );
}