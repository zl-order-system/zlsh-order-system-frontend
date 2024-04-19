import { AppConstants } from "./constants";
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

export function getDate(date: Date = new Date()) {
  const weeksDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: weeksDay[date.getDay()]
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

export function formatDatePretty(date: Date) {
  const month = date.getMonth() + 1; // Months are 0-indexed
  const day = date.getDate();
  const weekday = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()]; // Weekday in Japanese

  return `${month}/${day} 週${weekday}`;
}

export const formatDate = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

export const redirectToMainApp = (win: Window) => win.location = AppConstants.MAIN_APP_URL

export const redirectToLoginPage = (win: Window) => win.location = `${AppConstants.MAIN_APP_URL}#/login`
