import { MealOption } from "../../API/schema/meals";
import { getDate } from "../../util/util";
import { MealWeeksData } from "./type";

export function Block({mealData}: {mealData: MealWeeksData}){
  return (
    <div className="w-full max-w-[25rem] py-[0.2rem] px-[0.8rem] bg-[rgba(167,234,255,0.5)] rounded-[12px] border-[2px] border-[rgba(81,182,255,0.5)]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-[#1F2328] text-[1.5rem] font-[700]">{createDateText(mealData)}</div>
        { isThisWeek(mealData) && <div className="w-[4rem] h-[1.8rem] bg-[#E9B80B] text-[#DB4343] text-[1.3rem] font-[700] rounded-[4px] py-[0.3rem] px-[0.6rem] flex justify-center items-center">本週</div>}
      </div>
      <div className="ml-[1.2rem]">
        {mealData.mealsOption.map((meal, index) => <EachMeal meal={meal} i={index} key={index} />)}
      </div>
    </div>
  )
}

function createDateText(mealData: MealWeeksData){
  const startDate = getDate(mealData.startData)
  const endDate = getDate(mealData.endDate)
  return `${startDate.month}/${startDate.date}(${startDate.day[2]}) ~ ${endDate.month}/${endDate.date}(${endDate.day[2]})`
}

function EachMeal({meal, i}: {meal: MealOption, i: number}){
  return (
    <div className="flex flex-row justify-start items-center gap-[0.5rem]">
      <div className="text-[#1F2328] text-[1.5rem] font-[700]">{`${i + 1}. ${meal.name}`}</div>
      {meal.schoolOnly && <div className="bg-[#A4A4A4] rounded-[3px] text-[#3E3E3E] text-[0.87rem] font-[700] px-[0.2rem]">無自備</div>}
    </div>
  )
}

function isThisWeek(mealData: MealWeeksData){
  const nowDate = new Date()
  if(nowDate >= mealData.startData && nowDate <= mealData.endDate) return true
  return false
}