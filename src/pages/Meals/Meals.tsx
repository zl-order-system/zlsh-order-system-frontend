import { Hint } from "./Hint"
import { createFakeData } from "./fakeData"
import { GetMealsData } from "../../API/schema/meals"
import { MealsBlocks } from "./MealsBlocks"
import { getDate } from "../../util/util"

export function Meals() {
  // 目前API網址：https://zl-order-system.github.io/zlsh-order-system-crawl/API/meals/latest.json
  const mealsData = JSON.parse(createFakeData()) as GetMealsData

  return (
    <div className="flex pt-[0.5rem] px-[1.2rem] gap-[0.7rem] flex-col overflow-scroll">
      <div className="text-black text-[1.8rem] font-[700]">查看菜單</div>
      <Hint />
      <div className="text-black text-[1.5rem] font-[700]">{getTitleMonth(mealsData)}</div>
      <MealsBlocks mealsData={mealsData} />
    </div>
  )
}
function getTitleMonth(mealsData: GetMealsData){
  let len = Math.floor(mealsData.length / 2)
  return  getDate(new Date(mealsData[len].date)).month + "月"
}
