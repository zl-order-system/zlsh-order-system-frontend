import { Dispatch, SetStateAction } from "react";

export enum StateText {
  paid = "已繳費",
  notPaid = "未繳費",
  notOrder = "未訂餐" 
}

export interface SelectData {
  num: number;
  box?: string;
}

export interface SelectContextType {
  selectData: SelectData;
  setSelectData: Dispatch<SetStateAction<SelectData>>;
}

export type SelectRefType = {
  meal: React.RefObject<HTMLSelectElement>;
  box: React.RefObject<HTMLSelectElement>;
}