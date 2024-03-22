import { GetMealsData, MealData, MealOption } from "../../API/schema/meals"

export function MealsList({mealsData}: {mealsData: GetMealsData}){
  return (
    <div className="flex flex-col gap-[0.5rem]">
      {mealsData.map((item, index) => <Item item={item} key={index} /> )}
    </div>
  )
}

function Item({item}: { item: MealData }) {
  return (
    <>
      <div className="text-[#1F2328] text-[1.5rem] font-[700]">{item.date}</div>
      <div className="ml-[1rem]">
        {item.mealOptions.map((meal, index) => <EachMeal meal={meal} key={index} i={index} />)}
      </div>
    </>
  )
}

function EachMeal({meal, i}: {meal: MealOption, i: number}){
  return (
    <div className="flex flex-row justify-start items-end gap-[0.5rem]">
      <div className="text-[#1F2328] text-[1.5rem] font-[700]">{`${i + 1}. ${meal.name}`}</div>
      {meal.schoolOnly && <div className="text-[#686868] text-[0.87rem] font-[700]">無自備餐盒</div>}
    </div>
  )
}
