import { Input } from "@/components/ui/input";
interface CalorieInputProps {
    value: string;
    onChange: (val: string) => void;
    disabled?: boolean;
}

export function CalorieInput({ value, onChange, disabled = false }: CalorieInputProps) {
    return (
        <div className="space-y-2">
            <label 
                htmlFor="calories" 
                className="block text-sm font-semibold text-gray-900"
            >
                Daily Calorie Target
            </label>
            <div className="relative">
                <Input
                    id="calories"
                    className={`
                        w-full px-4 py-3 rounded-lg
                        border-2 transition-colors
                        ${disabled 
                            ? 'bg-gray-50 border-primary cursor-not-allowed' 
                            : 'bg-white border-accent hover:border-accent-foreground hover:ring-2 hover:ring-accent'
                        }
                        outline-none text-primary 
                    `}
                    type="number"
                    min="1"
                    max="5000"
                    placeholder="e.g., 2000"
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    disabled={disabled}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
                    kcal
                </span>
            </div>
            <p className="text-xs text-gray-500">
                Enter a value between 1-5000 calories
            </p>
        </div>
    );
}