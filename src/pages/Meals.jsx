import { useEffect, useState } from "react"
import Loader from "../components/loader/Loader"
import { getMealsData } from "../API/API"
import yellowHintIcon from "../svg/yellowHint.svg";

function Meals(){
    const [HTML, setHTML] = useState(<Loader />)
    const [mealsData, setMealData] = useState(null)
    useEffect(() => {
        getMealsData().then((res) => {
            setMealData(JSON.parse(res))
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    useEffect(() => {
        if (mealsData != null){
            setHTML(
                <div className="flex pt-[0.5rem] px-[1.2rem] gap-[0.7rem] flex-col overflow-scroll">
                    <div className="text-black text-[1.8rem] font-[700]">查看菜單</div>
                    <Hint />
                    <MealsList mealsData={mealsData} />
                </div>
            )
        }
    }, [mealsData])
    return HTML
}
export default Meals

function Hint(){
    return(
        <div className="bg-[#FFF8C5] rounded-[0.75rem] w-full border-[2px] border-[rgba(212,167,44,0.40)] p-[0.5rem]">
            <img src={yellowHintIcon} className="w-[1.4rem] inline mr-[0.5rem] mt-[-5px]" />
            <span className="text-[#1F2328] text-[1.1rem] font-[500]">
                本頁菜單均為系統自動生成，僅供參考 。請以
                <a className="text-[#0969DA] underline" href="https://www.zlsh.tp.edu.tw/category/office/div_300/section_lunch/lunch1_list/">學校公布的菜單</a>
                為準
            </span>
        </div>
    )
}

function MealsList({ mealsData }){
    return(
        <div className="flex flex-col gap-[0.5rem]">
            {mealsData.map((day, index) => {
                return(
                    <div key={index}>
                        <div className="text-[#1F2328] text-[1.5rem] font-[700]">{day["date"]}</div>
                        <div className="ml-[1rem]">
                            {day["mealOptions"].map((meal, index) => {
                                return(
                                    <div className="flex flex-row justify-start items-end" key={index}>
                                        <div className="text-[#1F2328] text-[1.5rem] font-[700]">{`${index+1}. ${meal["name"]}`}</div>
                                        {meal["schoolOnly"] && <div className="text-[#686868] text-[0.87rem] font-[700]">無自備餐盒</div>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}