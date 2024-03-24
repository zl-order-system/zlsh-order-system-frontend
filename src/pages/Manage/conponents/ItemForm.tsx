import { useRef, useState } from "react"

import trashIcon from "../../../assets/trashIcon.svg"
import editIcon from "../../../assets/editIcon.svg"
import { OrderItem, OrderItemOrdered } from "../../../API/schema/manage"
import { HintData, HintType, LunchBox, OrderState, SetState } from "../../../util/types/types"
import { getPrice, parseLunchBox } from "../../../util/util"
import { HttpMethod, useMutationShort } from "../../../API/util"
import { z } from "zod";
import { hintPopUp } from "../../../components/Hint/Hint"

type SelRef = React.RefObject<HTMLSelectElement>;

export function ItemForm({item, refetch, setHintData}: {item: OrderItem, refetch: ()=>void, setHintData: SetState<HintData>}) {
  // TODO: change to event emitters
  const selRefMeal = useRef<HTMLSelectElement>(null);
  const selRefBox = useRef<HTMLSelectElement>(null);
  return (
    <div className={"flex flex-row justify-between items-center"}>
      {item.state === OrderState.UNORDERED && <Selector item={item} selRefMeal={selRefMeal} selRefBox={selRefBox}/>}
      {item.state === OrderState.ORDERED && <Selector item={item} selRefMeal={selRefMeal} selRefBox={selRefBox}/>}
      {item.state === OrderState.PAID && <OrderInfo item={item}/>}
      <ItemButton item={item} refetch={refetch} selRefMeal={selRefMeal} selRefBox={selRefBox} setHintData={setHintData}/>
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

function ItemButton({item, refetch, selRefBox, selRefMeal, setHintData}: {item: OrderItem, refetch: ()=>void, selRefBox: SelRef, selRefMeal: SelRef, setHintData: SetState<HintData>}) {
  const createOrderData = useMutationShort("/api/order", HttpMethod.POST, z.undefined(), "createOrderData");
  const updateOrderData = useMutationShort("/api/order", HttpMethod.PATCH, z.undefined(), "createOrderData");
  const deleteOrderData = useMutationShort("/api/order", HttpMethod.DELETE, z.undefined(), "createOrderData");

  async function onClickCreate() {
    await createOrderData({
      date: item.date,
      lunchBoxType: selRefBox.current?.value,
      selectedMeal: selRefMeal.current?.value
    })
    .then(() => hintPopUp(HintType.success, "訂餐成功", setHintData))
    .catch(() => hintPopUp(HintType.error, "訂餐失敗", setHintData))
    refetch();
  }

  async function onClickUpdate() {
    await updateOrderData({
      date: item.date,
      lunchBoxType: selRefBox.current?.value,
      selectedMeal: selRefMeal.current?.value
    })
    .then(() => hintPopUp(HintType.success, "更新成功", setHintData))
    .catch(() => hintPopUp(HintType.error, "更新失敗", setHintData))
    refetch();
  }

  async function onClickDelete() {
    await deleteOrderData({
      date: item.date,
    })
    .then(() => hintPopUp(HintType.success, "刪除成功", setHintData))
    .catch(() => hintPopUp(HintType.error, "刪除失敗", setHintData))
    refetch();
  }

  switch (item.state) {
  case OrderState.UNORDERED:
    return (
      <button onClick={onClickCreate} className="text-[#35B1E2] text-[1rem] font-[600]">預定</button>
    )
  case OrderState.ORDERED:
    return (
      <div className="flex flex-row gap-3">
        <button onClick={onClickUpdate}><img src={editIcon}></img></button>
        <button onClick={onClickDelete} className="block w-4"><img src={trashIcon}></img></button>
      </div>
    )
  case OrderState.PAID:
    return <></>
  }
}
