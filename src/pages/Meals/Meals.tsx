import { Hint } from "./Hint"
import { GetMealsData } from "../../API/schema/meals"
import { MealsBlocks } from "./MealsBlocks"
import { getDate } from "../../util/util"
import { useQuery } from "react-query"
import Loader from "../../components/Loader/Loader"

export function Meals() {
  // 目前API網址：https://zl-order-system.github.io/zlsh-order-system-crawl/API/meals/latest.json
  const {data, isError} = useQuery(["fetchMeals"], fetchMealsData)
  const mealsData = data as GetMealsData

  if (mealsData === undefined) return <Loader/>
  isError && (
    <div className="flex justify-center items-center">
      <div className="text-red-600 text-[1.8rem] font-[700]">資料獲取失敗</div>
    </div>
  )
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
async function fetchMealsData(){
  const mealsUrl = "https://zl-order-system.github.io/zlsh-order-system-crawl/API/meals/latest.json"
  let res = await fetch(mealsUrl)
  return  res.json()
}