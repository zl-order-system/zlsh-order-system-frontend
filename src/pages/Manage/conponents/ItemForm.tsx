import { OrderDataBody, OrderDataBodyOrdered } from "../../../API/schema/manage"
import { SelectContextType, SelectData, SelectRefType } from "../schema"
import trashIcon from "../../../assets/trashIcon.svg"
import editIcon from "../../../assets/editIcon.svg"
import lo from "lodash"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { LunchBoxPrice, LunchBoxType, OrderState } from "../../../util/types/types"

const SelectContext = createContext<SelectContextType>({} as SelectContextType)

function selectDataInit(item: OrderDataBody, ): SelectData {
  const mealOptions = lo.cloneDeep(item.mealOptions)

  if (item.state !== OrderState.UNORDERED)
    return {num: mealOptions.findIndex(e => e.name === item.selectedMeal), box: item.lunchBox};

  if (mealOptions[0].schoolOnly)
    return {num: 0, box: LunchBoxType.SCHOOL};

  return {num: 0, box: LunchBoxType.PERSONAL};
}

export function ItemForm({item}: { item: OrderDataBody }) {
  const [selectData, setSelectData] = useState<SelectData>(selectDataInit(item));
  return (
    <SelectContext.Provider value={{ selectData, setSelectData }}>
      <div className={`flex flex-row justify-between items-center`}>
        {item.state === OrderState.PAID && <OrderInfo item={item}/>}
        {item.state !== OrderState.PAID && <Selector item={item}/>}
        <ItemButton item={item}/>
      </div>
    </SelectContext.Provider>
  )
}

function OrderInfo({ item }: { item: OrderDataBodyOrdered }) {
  return (
    <div className={`text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem]`}>
      <div>{item.selectedMeal}</div>
      <div>{item.lunchBox}</div>
      <div>{item.price}元</div>
    </div>
  )
}

function Selector({ item }: { item: OrderDataBody }) {
  const {selectData, setSelectData}: SelectContextType = useContext(SelectContext)
  const selectRef: SelectRefType = {meal: useRef<HTMLSelectElement>(null), box: useRef<HTMLSelectElement>(null)}
  const mealOption = lo.cloneDeep(item.mealOptions)

  const handleChange = () => setSelectData({
    box: selectRef.box.current?.value as LunchBoxType,
    num: mealOption.findIndex( m => m.name === selectRef.meal.current?.value )
  });

  // 檢查box有無改變
  useEffect(()=> {
    setSelectData({
      ...selectData,
      box: selectRef.box.current?.value as LunchBoxType
    });
  }, [selectRef.meal.current?.value])

  return (
    <div className={"flex flex-row gap-2 mt-[2px]"}>
      <select defaultValue={item.state !== OrderState.UNORDERED ? item.lunchBox : ""} onChange={handleChange} ref={selectRef.box} className="py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        {mealOption[selectData.num].schoolOnly || <option value="自備餐盒">自備餐盒</option>}
        <option value="學校餐盒">學校餐盒</option>
      </select>
      <select defaultValue={item.state !== OrderState.UNORDERED ? item.selectedMeal : ""} onChange={handleChange}  ref={selectRef.meal} className="py-0.5 px-1 text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        {item.mealOptions.map((v, i) => <option value={v.name} key={i}>{v.name}</option>)}
      </select>
      <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">{ selectData.box === LunchBoxType.PERSONAL ? LunchBoxPrice.PERSONAL : LunchBoxPrice.SCHOOL }元</div>
    </div>
  )
}

function ItemButton({item}: {item: OrderDataBody}) {
  const {selectData, setSelectData}: SelectContextType = useContext(SelectContext)
  const handleOrder = () => console.log(selectData);
  switch (item.state) {
  case OrderState.UNORDERED:
    return (
      <button onClick={handleOrder} className="text-[#35B1E2] text-[1rem] font-[600]">預定</button>
    )
  case OrderState.UNPAID:
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
