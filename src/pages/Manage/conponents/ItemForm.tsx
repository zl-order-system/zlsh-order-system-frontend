import lo from "lodash"
import { useEffect, useMemo, useRef, useState } from "react"

import trashIcon from "../../../assets/trashIcon.svg"
import editIcon from "../../../assets/editIcon.svg"
import { OrderDataBody, OrderDataBodyOrdered } from "../../../API/schema/manage"
import { SelectData } from "../schema"
import { LunchBoxPrice, LunchBoxType, OrderState, SetState } from "../../../util/types/types"
import { parseLunchBox } from "../../../util/util"

function selectDataInit(item: OrderDataBody): SelectData {
  if (item.state !== OrderState.UNORDERED)
    return {
      num: item.mealOptions.findIndex(e => e.name === item.selectedMeal),
      box: item.lunchBox
    };

  if (item.mealOptions[0].schoolOnly)
    return {num: 0, box: LunchBoxType.SCHOOL};

  return {num: 0, box: LunchBoxType.PERSONAL};
}

export function ItemForm({item: pItem}: {item: OrderDataBody}) {
  const item = useMemo(() => lo.cloneDeep(pItem), [pItem])
  const [selectData, setSelectData] = useState<SelectData>(selectDataInit(item));
  return (
    <div className={"flex flex-row justify-between items-center"}>
      {item.state === OrderState.UNORDERED && <Selector item={item} selectData={selectData} setSelectData={setSelectData}/>}
      {item.state === OrderState.UNPAID && <Selector defaultLunchBox={item.lunchBox} defaultMeal={item.selectedMeal} item={item} selectData={selectData} setSelectData={setSelectData}/>}
      {item.state === OrderState.PAID && <OrderInfo item={item}/>}
      <ItemButton item={item} selectData={selectData}/>
    </div>
  )
}

function OrderInfo({item}: {item: OrderDataBodyOrdered}) {
  return (
    <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem]">
      <div>{item.selectedMeal}</div>
      <div>{item.lunchBox}</div>
      <div>{item.price}元</div>
    </div>
  )
}

// function SelectorOld({item, selectData, setSelectData}: {item: OrderDataBody, selectData: SelectData, setSelectData: SetState<SelectData>}) {
//   const selectRef: SelectRefType = {meal: useRef<HTMLSelectElement>(null), box: useRef<HTMLSelectElement>(null)}
//   const mealOption = lo.cloneDeep(item.mealOptions)

//   const handleChange = () => setSelectData({
//     box: selectRef.box.current?.value as LunchBoxType,
//     num: mealOption.findIndex( m => m.name === selectRef.meal.current?.value )
//   });

//   // 檢查box有無改變
//   useEffect(()=> {
//     setSelectData({
//       ...selectData,
//       box: selectRef.box.current?.value as LunchBoxType
//     });
//   }, [selectRef.meal.current?.value])

//   return (
//     <div className="flex flex-row gap-2 mt-[2px]">
//       <select defaultValue={item.state !== OrderState.UNORDERED ? item.lunchBox : ""} onChange={handleChange} ref={selectRef.box} className="py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
//         {mealOption[selectData.num].schoolOnly || <option value="自備餐盒">自備餐盒</option>}
//         <option value="學校餐盒">學校餐盒</option>
//       </select>
//       <select defaultValue={item.state !== OrderState.UNORDERED ? item.selectedMeal : ""} onChange={handleChange}  ref={selectRef.meal} className="py-0.5 px-1 text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
//         {item.mealOptions.map((v, i) => <option value={v.name} key={i}>{v.name}</option>)}
//       </select>
//       <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">{ selectData.box === LunchBoxType.PERSONAL ? LunchBoxPrice.PERSONAL : LunchBoxPrice.SCHOOL }元</div>
//     </div>
//   )
// }

function Selector({item, selectData, setSelectData, defaultLunchBox, defaultMeal}: {item: OrderDataBody, selectData: SelectData, setSelectData: SetState<SelectData>, defaultLunchBox?: string, defaultMeal?: string}) {
  const selectorRefMeal = useRef<HTMLSelectElement>(null);
  const selectorRefBox = useRef<HTMLSelectElement>(null);

  function handleChange() {
    if (selectorRefBox.current === null) return;
    setSelectData({
      num: item.mealOptions.findIndex(m => m.name === selectorRefMeal.current?.value),
      box: parseLunchBox(selectorRefBox.current.value)
    })
  }

  // 檢查box有無改變
  useEffect(()=> {
    setSelectData(v => {
      if (selectorRefBox.current === null) return v;
      return {
        ...v,
        box: parseLunchBox(selectorRefBox.current.value)
      }
    });
  }, [selectorRefMeal.current?.value, setSelectData])

  return (
    <div className="flex flex-row gap-2 mt-[2px]">
      <select defaultValue={defaultMeal} onChange={handleChange}  ref={selectorRefMeal} className="py-0.5 px-1 text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        {item.mealOptions.map((v, i) => (
          <option value={v.name} key={i}>{v.name}</option>
        ))}
      </select>
      <select defaultValue={defaultLunchBox} onChange={handleChange} ref={selectorRefBox} className="py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        {!item.mealOptions[selectData.num].schoolOnly && <option value="自備餐盒">自備餐盒</option>}
        <option value="學校餐盒">學校餐盒</option>
      </select>
      <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">{ selectData.box === LunchBoxType.PERSONAL ? LunchBoxPrice.PERSONAL : LunchBoxPrice.SCHOOL }元</div>
    </div>
  )
}

function ItemButton({item, selectData}: {item: OrderDataBody, selectData: SelectData}) {
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
