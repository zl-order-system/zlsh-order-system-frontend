import { z } from "zod";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export enum OrderState {
  UNORDERED = "未訂餐",
  ORDERED = "未繳費",
  PAID = "已繳費",
}

export const zOrderStateUnordered = z.literal("未訂餐");
export const zOrderStateOrdered = z.literal("未繳費");
export const zOrderStatePaid = z.literal("已繳費");

export const zOrderState = z.union([
  zOrderStateUnordered,
  zOrderStateOrdered,
  zOrderStatePaid,
]);

export enum LunchBox {
  PERSONAL = "自備餐盒",
  SCHOOL = "學校餐盒",
}

export const zLunchBox = z.union([
  z.literal("自備餐盒"),
  z.literal("學校餐盒"),
]);

export enum Page {
  LOGIN = "/login",
  HOME = "/",
  MANAGE = "/manage",
  ACCOUNT = "/account",
  MEALS = "/meals",
}

export enum Role {
  STATS_ADMIN = "STATS_ADMIN",
  PAYMENTS_ADMIN = "PAYMENTS_ADMIN",
  MEAL_ADMIN = "MEAL_ADMIN",
  MESSAGES_ADMIN = "MESSAGES_ADMIN",
}

export enum HintType {
  success = "success",
  error = "error"
}
export type HintRef = {
  text: string,
  hintType: HintType,
  state: "close" | "open"
}
export type HintData = {
  text: string,
  hintType: HintType,
  timer?: NodeJS.Timeout
} | undefined
