import { MealOption } from "../../API/schema/meals"

export type MealWeeksData = {
  startData: Date,
  endDate: Date,
  mealsOption: MealOption[]
}