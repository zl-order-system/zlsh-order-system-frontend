import { LunchBox, OrderState, zLunchBox, zOrderStateOrdered, zOrderStatePaid, zOrderStateUnordered } from "../../util/types/types"
import { z } from "zod";

export type OrderDataHeader = {
  paid: number,
  owed: number,
  daysUnordered: number,
}

export type MealOption = {
  name: string,
  schoolOnly: boolean
}

const zMealOption = z.object({
  name: z.string(),
  schoolOnly: z.boolean()
})

type OrderItemCommon = {
  date: [number, number, number],
  displayDate: string,
  mealOptions: MealOption[],
  locked: boolean
}

const zOrderItemCommon = z.object({
  date: z.tuple([z.number(), z.number(), z.number()]),
  displayDate: z.string(),
  mealOptions: z.array(zMealOption),
  locked: z.boolean()
})


export type OrderItemUnordered = (OrderItemCommon & {
  state: OrderState.UNORDERED,
  id: null,
  lunchBox: null,
  price: null,
  selectedMeal: null,
})

const zOrderItemUnordered = z.intersection(z.object({
  state: zOrderStateUnordered,
  id: z.null(),
  lunchBox: z.null(),
  price: z.null(),
  selectedMeal: z.null()
}), zOrderItemCommon)

export type OrderItemOrdered = (OrderItemCommon & {
  state: OrderState.ORDERED | OrderState.PAID,
  id: string,
  lunchBox: LunchBox,
  price: 65| 70,
  selectedMeal: number,
})

const zOrderItemOrdered = z.intersection(z.object({
  state: z.union([
    zOrderStateOrdered,
    zOrderStatePaid,
  ]),
  id: z.string(),
  lunchBox: zLunchBox,
  price: z.union([z.literal(65), z.literal(70)]),
  selectedMeal: z.number()
}), zOrderItemCommon)

export type OrderItem = OrderItemOrdered | OrderItemUnordered

export type GetOrderDataRes = {
  headerData: OrderDataHeader,
  bodyData: OrderItem[]
}

export const zGetOrderDataRes = z.object({
  headerData: z.object({
    paid: z.number(),
    owed: z.number(),
    daysUnordered: z.number(),
  }),
  bodyData: z.array(z.union([zOrderItemOrdered, zOrderItemUnordered]))
});

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
