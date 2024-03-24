import { GetMealsData, MealData } from "../../API/schema/meals"
import { Block } from "./Block"
import { MealWeeksData } from "./type"

export function MealsBlocks({mealsData}: {mealsData: GetMealsData}){
  const weeksData = changeToWeekData(mealsData)
  return (
    <div className="flex justify-start flex-row gap-[2rem] flex-wrap mb-5">
      {weeksData.map((weekData, index) => <Block mealData={weekData} key={index} />)}
    </div>
  )
}

function changeToWeekData(mealsData: GetMealsData){
  let lastMealsString: string
  let weekMeals: MealData[][] = []
  mealsData.forEach(mealData  => {
    let mealsString = mealData.mealOptions.map(option => option.name).join()
    if(lastMealsString === mealsString ){
      weekMeals[weekMeals.length-1].push(mealData)
    }else{
      weekMeals.push([mealData])
    }
    lastMealsString = mealsString
  })
  let weeksData: MealWeeksData[] = weekMeals.map(week => ({
    startData: new Date(week[0].date),
    endDate: new Date(week[week.length-1].date),
    mealsOption: week[0].mealOptions
  }))
  return weeksData
}