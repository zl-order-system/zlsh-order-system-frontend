import {  useState } from "react";
import { GetOrderDataRes, OrderItem } from "../../../API/schema/manage"
import { Hint } from "../../../components/Hint/Hint";
import { HintData, OrderState } from "../../../util/types/types";
import { formatDatePretty } from "../../../util/util";
import { ItemForm } from "./ItemForm"

export function Items({data, refetch}: {data: GetOrderDataRes, refetch: ()=>void}) {
  const [hintData, setHintData] = useState<HintData>()
  return (
    <div className=" flex flex-col items-center w-full">
      <Hint hintData={hintData}/>
      {data.bodyData.map((item, index) => (
        <div className=" flex flex-col w-full my-[0.75rem]" key={index}>
          <ItemText item={item} />
          <ItemForm item={item} refetch={refetch} setHintData={setHintData} />
        </div>
      ))}
    </div>
  )
}

function ItemText({item}: {item: OrderItem}) {
  return (
    <div className=" flex flex-row justify-between">
      <div className=" text-black text-[1.5rem] font-[700]">{formatDatePretty(item.date)}</div>
      <ItemStateText state={item.state}/>
    </div>
  )
}

function ItemStateText({state}: {state: OrderState}) {
  const className = "text-[1.5rem] font-[600]";
  switch (state) {
  case OrderState.PAID:
    return <div className={`text-[#97D581] ${className}`}>{state}</div>;
  case OrderState.ORDERED:
    return <div className={`text-[#E2473D] ${className}`}>{state}</div>;
  case OrderState.UNORDERED:
    return <div className={`text-[#D0CFCF] ${className}`}>{state}</div>;
  }
}

