import React from "react";

interface DietSelectProps {
    value: string;
    onChange: (val: string) => void;
    disabled?: boolean;
}

const DIET_OPTIONS = [
    "Balanced",
    "Mediterranean",
    "Keto",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Low Carb",
    "High Protein"
];

export function DietSelect({ value, onChange, disabled = false }: DietSelectProps) {
    return (
        <div className="space-y-2">
            <label 
                htmlFor="diet" 
                className="block text-sm font-semibold text-gray-900"
            >
                Diet Preference
            </label>
            <select
                id="diet"
                className={`
                    w-full px-4 py-3 rounded-lg
                    border-2 transition-colors
                    ${disabled 
                        ? 'bg-gray-50 border-gray-200 cursor-not-allowed' 
                        : 'bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }
                    outline-none text-gray-900 appearance-none
                    bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3e%3cpolyline points="6 9 12 15 18 9"%3e%3c/polyline%3e%3c/svg%3e')] 
                    bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat
                    pr-10
                `}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                disabled={disabled}
            >
                <option value="">Select a diet type</option>
                {DIET_OPTIONS.map((diet) => (
                    <option key={diet} value={diet}>
                        {diet}
                    </option>
                ))}
            </select>
            <p className="text-xs text-gray-500">
                Choose your dietary preference
            </p>
        </div>
    );
}