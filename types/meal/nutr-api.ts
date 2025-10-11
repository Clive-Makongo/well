interface NutrientDetail {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

interface NutritionItem {
    title: string
    amount: string
    indented: boolean
    percentOfDailyNeeds: number
}

interface Property {
    name: string
    amount: number
    unit: string
}

interface Flavonoid {
    name: string
    amount: number | string
    unit: string
}

interface Ingredient {
    id: number
    name: string
    amount: number
    unit: string
    nutrients: NutrientDetail[]
}

interface CaloricBreakdown {
    percentProtein: number
    percentFat: number
    percentCarbs: number
}

interface WeightPerServing {
    amount: number
    unit: string
}

export interface NutritionResponse {
    calories: string
    carbs: string
    fat: string
    protein: string
    bad: NutritionItem[]
    good: NutritionItem[]
    nutrients: NutrientDetail[]
    properties: Property[]
    flavonoids: Flavonoid[]
    ingredients: Ingredient[]
    caloricBreakdown: CaloricBreakdown
    weightPerServing: WeightPerServing
    expires: number
    error: unknown
}

export interface PNutirtionResresponse {
    breakfast: NutritionResponse | null
    lunch: NutritionResponse | null
    dinner: NutritionResponse | null
}