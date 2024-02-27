// import { OrderState, lunchBoxType } from "../Enums"

import { LunchBoxType, OrderState } from "../../util/types/types"

export type OrderDataHeader = {
  paid: number,
  owed: number,
  daysUnordered: number,
}

export type MealOption = {
  name: string,
  schoolOnly: boolean
}

type OrderDataBodyOld = {
  state: OrderState,
  date: number[],
  displayDate: string,
  id: string | null,
  lunchBox: LunchBoxType | "-",
  price: "65"| "70" | "-",
  selectedMeal: string | "-",
  mealOptions: MealOption[],
  locked: boolean
}

type OrderDataBodyCommon = {
  date: [number, number, number],
  displayDate: string,
  mealOptions: MealOption[],
  locked: boolean
}

export type OrderDataBodyUnordered = (OrderDataBodyCommon & {
  state: OrderState.UNORDERED,
  id: null,
  lunchBox: "-",
  price: "-",
  selectedMeal:"-",
})

export type OrderDataBodyOrdered = (OrderDataBodyCommon & {
  state: OrderState.UNPAID | OrderState.PAID,
  id: string,
  lunchBox: LunchBoxType,
  price: "65"| "70",
  selectedMeal: string,
})

export type OrderDataBody = OrderDataBodyOrdered | OrderDataBodyUnordered

export type GetOrderDataRes = {
  headerData: OrderDataHeader,
  bodyData: OrderDataBody[]
}
