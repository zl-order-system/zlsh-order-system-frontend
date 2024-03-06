import { LunchBoxType } from "./types/types";

export function parseLunchBox(s: string) {
  switch(s) {
  case "學校餐盒":
    return LunchBoxType.SCHOOL;
  case "自備餐盒":
    return LunchBoxType.PERSONAL;
  default:
    throw new Error("Invalid Lunch Box String");
  }
}
