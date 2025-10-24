import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
                className="block text-sm font-semibold text-primary"
            >
                Diet Preference
            </label>
            <Select onValueChange={onChange} value={value} disabled={disabled}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Dietary Options" />
                </SelectTrigger>
                <SelectContent>
                    {DIET_OPTIONS.map((diet, key) =>( 
                        <SelectItem value={diet} key={key}>
                            {diet}
                        </SelectItem>
                    ))}
                </SelectContent>
                </Select>
        </div>
    );
}