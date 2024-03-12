import { LunchBox } from "./types/types";

export function parseLunchBox(s: string) {
  switch(s) {
  case "自備餐盒":
    return LunchBox.PERSONAL;
  case "學校餐盒":
    return LunchBox.SCHOOL;
  default:
    throw new Error("Invalid Lunch Box String");
  }
}

export function getDate(date?: number[]) {
  const weeksDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  let newDate: Date
  if ( date ){
    newDate = new Date(date[0], date[1] - 1, date[2])
  }else{
    newDate = new Date()
  }
  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
    day: weeksDay[newDate.getDay()]
  }
}

export function getPrice(box: LunchBox) {
  switch (box) {
  case LunchBox.PERSONAL:
    return 65;
  case LunchBox.SCHOOL:
    return 70;
  }
}
