export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export enum OrderState {
  UNORDERED = "未訂餐",
  UNPAID = "未繳費",
  PAID = "已繳費",
}

export enum LunchBox {
  PERSONAL = "自備餐盒",
  SCHOOL = "學校餐盒",
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
