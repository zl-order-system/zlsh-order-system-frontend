import { Dispatch, SetStateAction } from "react";
import { LunchBoxType } from "../../util/types/types";

export type SelectData = {
  num: number;
  box: LunchBoxType;
}

export type SelectContextType = {
  selectData: SelectData;
  setSelectData: Dispatch<SetStateAction<SelectData>>;
}

export type SelectRefType = {
  meal: React.RefObject<HTMLSelectElement>;
  box: React.RefObject<HTMLSelectElement>;
}
