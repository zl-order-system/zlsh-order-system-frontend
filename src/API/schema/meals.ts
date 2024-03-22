export type MealOption ={
  name: string,
  schoolOnly: boolean
}

export type MealData = {
  date: string,
  mealOptions: MealOption[]
}

export type GetMealsData = MealData[]
