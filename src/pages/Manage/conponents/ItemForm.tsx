import { useRef, useState } from "react"

import trashIcon from "../../../assets/trashIcon.svg"
import editIcon from "../../../assets/editIcon.svg"
import { OrderItem, OrderItemOrdered } from "../../../API/schema/manage"
import { LunchBox, OrderState } from "../../../util/types/types"
import { getPrice, parseLunchBox } from "../../../util/util"

type SelRef = React.RefObject<HTMLSelectElement>;

export function ItemForm({item}: {item: OrderItem}) {
  // TODO: change to event emitters
  const selRefMeal = useRef<HTMLSelectElement>(null);
  const selRefBox = useRef<HTMLSelectElement>(null);
  return (
    <div className={"flex flex-row justify-between items-center"}>
      {item.state === OrderState.UNORDERED && <Selector item={item} selRefMeal={selRefMeal} selRefBox={selRefBox}/>}
      {item.state === OrderState.ORDERED && <Selector item={item} selRefMeal={selRefMeal} selRefBox={selRefBox}/>}
      {item.state === OrderState.PAID && <OrderInfo item={item}/>}
      <ItemButton item={item} selRefMeal={selRefMeal} selRefBox={selRefBox}/>
    </div>
  )
}

function OrderInfo({item}: {item: OrderItemOrdered}) {
  return (
    <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem]">
      <div>{item.selectedMeal}</div>
      <div>{item.lunchBox}</div>
      <div>{item.price}元</div>
    </div>
  )
}

function Selector({item, selRefBox, selRefMeal}: {item: OrderItem, selRefBox: SelRef, selRefMeal: SelRef}) {
  const [schoolOnly, setSchoolOnly] = useState(item.mealOptions[item.selectedMeal || 0].schoolOnly);

  function getDefaultPrice() {
    if (schoolOnly)
      return getPrice(LunchBox.SCHOOL);
    if (item.lunchBox === null)
      return getPrice(LunchBox.PERSONAL);
    return getPrice(item.lunchBox);
  }

  const [price, setPrice] = useState<65 | 70>(getDefaultPrice());

  function onBoxChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPrice(getPrice(parseLunchBox(e.target.value)));
  }

  function onMealChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const i = Number.parseInt(e.target.value);
    setSchoolOnly(item.mealOptions[i].schoolOnly);
  }

  const className = "py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white"
  return (
    <div className="flex flex-row gap-2 mt-[2px]">
      <select defaultValue={item.selectedMeal?.toString()} onChange={onMealChange} ref={selRefMeal} className={className}>
        {item.mealOptions.map((v, i) => (
          <option value={i} key={i}>{v.name}</option>
        ))}
      </select>
      <select defaultValue={item.selectedMeal?.toString()} onChange={onBoxChange} ref={selRefBox} className={className}>
        {!schoolOnly && <option value={LunchBox.PERSONAL}>自備餐盒</option>}
        <option value={LunchBox.SCHOOL}>學校餐盒</option>
      </select>
      <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">
        {price}元
      </div>
    </div>
  )
}

function ItemButton({item, selRefBox, selRefMeal}: {item: OrderItem, selRefBox: SelRef, selRefMeal: SelRef}) {

  function onClick () {
    console.log({box: selRefBox.current?.value, meal: selRefMeal.current?.value})
  }

  switch (item.state) {
  case OrderState.UNORDERED:
    return (
      <button onClick={onClick} className="text-[#35B1E2] text-[1rem] font-[600]">預定</button>
    )
  case OrderState.ORDERED:
    return (
      <div className="flex flex-row gap-3">
        <button className=""><img src={editIcon}></img></button>
        <button className="block w-4"><img src={trashIcon}></img></button>
      </div>
    )
  case OrderState.PAID:
    return <></>
  }
}
