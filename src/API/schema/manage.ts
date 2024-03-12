import { LunchBox, OrderState } from "../../util/types/types"

export type OrderDataHeader = {
  paid: number,
  owed: number,
  daysUnordered: number,
}

export type MealOption = {
  name: string,
  schoolOnly: boolean
}

// type OrderDataBodyOld = {
//   state: OrderState,
//   date: number[],
//   displayDate: string,
//   id: string | null,
//   lunchBox: LunchBox | "-",
//   price: "65"| "70" | "-",
//   selectedMeal: string | "-",
//   mealOptions: MealOption[],
//   locked: boolean
// }

type OrderDataBodyCommon = {
  date: [number, number, number],
  displayDate: string,
  mealOptions: MealOption[],
  locked: boolean
}

export type OrderItemUnordered = (OrderDataBodyCommon & {
  state: OrderState.UNORDERED,
  id: null,
  lunchBox: null,
  price: null,
  selectedMeal: null,
})

export type OrderItemOrdered = (OrderDataBodyCommon & {
  state: OrderState.UNPAID | OrderState.PAID,
  id: string,
  lunchBox: LunchBox,
  price: "65"| "70",
  selectedMeal: number,
})

export type OrderItem = OrderItemOrdered | OrderItemUnordered

export type GetOrderDataRes = {
  headerData: OrderDataHeader,
  bodyData: OrderItem[]
}
