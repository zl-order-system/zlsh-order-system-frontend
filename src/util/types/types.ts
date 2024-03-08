export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export enum OrderState {
  UNORDERED = "未訂餐",
  UNPAID = "未繳費",
  PAID = "已繳費",
}

export enum LunchBoxType {
  SCHOOL = "學校餐盒",
  PERSONAL = "自備餐盒",
}

export enum LunchBoxPrice {
  SCHOOL = 70,
  PERSONAL = 65,
}

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