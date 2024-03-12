import { Dispatch, SetStateAction } from "react";
import { LunchBox } from "../../util/types/types";

export type SelectData = {
  num: number;
  box: LunchBox;
}

export type SelectContextType = {
  selectData: SelectData;
  setSelectData: Dispatch<SetStateAction<SelectData>>;
}

export type SelectRefType = {
  meal: React.RefObject<HTMLSelectElement>;
  box: React.RefObject<HTMLSelectElement>;
}
