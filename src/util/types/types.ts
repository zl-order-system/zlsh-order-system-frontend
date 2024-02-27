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
