import { GetManageDataResponse } from "../../../API/schema/Manage"
import { SelectContextType, SelectData, SelectRefType, StateText } from "../Schema"
import trashIcon from "../../../assets/trashIcon.svg"
import editIcon from "../../../assets/editIcon.svg"
import _ from "lodash"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { LunchBoxPrice, LunchBoxType } from "../../../API/Enums"

const SelectContext = createContext<SelectContextType>({} as SelectContextType)

export function ItemContro({ item }: { item: GetManageDataResponse["bodyData"][0] }) {
  const mealOption = _.cloneDeep(item.mealOptions)
  const selectNumInit = (): number => item.state === StateText.notPaid ? mealOption.findIndex( e => e.name === item.selectedMeal ) : 0
  const selectBoxInit = (): string => item.state === StateText.notPaid ? item.lunchBox : mealOption[0].schoolOnly ? LunchBoxType.SCHOOL: LunchBoxType.PERSONAL
  const [selectData, setSelectData] = useState<SelectData>({ num: selectNumInit(), box: selectBoxInit() })

  return (
    <SelectContext.Provider value={{ selectData, setSelectData }}>
      <div className={`flex flex-row justify-between items-center`}>
        { item.state === StateText.paid ? <PaidSelector item={ item } /> : <NotPaidSelector item={ item } /> }
        <ItemButton item={ item } />
      </div>
    </SelectContext.Provider>
  )
}

function PaidSelector({ item }: { item: GetManageDataResponse["bodyData"][0] }) {
  return (
    <div className={`text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem]`}>
      <div>{ item.selectedMeal }</div>
      <div>{ item.lunchBox }</div>
      <div>{ item.price }元</div>
    </div>
  )
}

function NotPaidSelector({ item }: { item: GetManageDataResponse["bodyData"][0] }) {
  const {selectData, setSelectData}: SelectContextType = useContext(SelectContext)
  const selectRef: SelectRefType = {meal: useRef<HTMLSelectElement>(null), box: useRef<HTMLSelectElement>(null)}
  const mealOption = _.cloneDeep(item.mealOptions)
  
  const handleChange = () => setSelectData({ box: selectRef.box.current?.value, num: mealOption.findIndex( m => m.name === selectRef.meal.current?.value ) })
  useEffect(()=>{setSelectData({...selectData, box: selectRef.box.current?.value})}, [selectRef.meal.current?.value]) // 檢查box有無改變
  
  return (
    <div className={"flex flex-row gap-2 mt-[2px]"}>
      <select defaultValue={ item.lunchBox !== "-" ? item.lunchBox : "" } onChange={ handleChange } ref={selectRef.box} className="py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        { mealOption[selectData.num].schoolOnly || <option value="自備餐盒">自備餐盒</option> }
        <option value="學校餐盒">學校餐盒</option>
      </select>
      <select defaultValue={ item.selectedMeal !== "-" ? item.selectedMeal : "" } onChange={ handleChange }  ref={selectRef.meal} className="py-0.5 px-1 text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
        { item.mealOptions.map( (e, index) => <option value={ e.name } key={ index }>{ e.name }</option> ) }
      </select>
      <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">{ selectData.box === LunchBoxType.PERSONAL ? LunchBoxPrice.PERSONAL : LunchBoxPrice.SCHOOL }元</div>
    </div>
  )
}

function ItemButton({ item }: { item: GetManageDataResponse["bodyData"][0] }) {
  const {selectData, setSelectData}: SelectContextType = useContext(SelectContext)


  const handleOrder = () => console.log(selectData)
  switch (item.state) {
    case StateText.notOrder:
      return (
        <button onClick={handleOrder} className={`text-[#35B1E2] text-[1rem] font-[600]`}>預定</button>
      )
    case StateText.notPaid:
      return (
        <div className={`flex flex-row gap-3`}>
          <button className={""}><img src={editIcon}></img></button>
          <button className={`block w-4`}><img src={trashIcon}></img></button>
        </div>
      )
    default:
      return <></>
  }
   
}
