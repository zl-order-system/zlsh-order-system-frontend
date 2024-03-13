import { GetOrderDataRes, OrderItem } from "../../../API/schema/manage"
import { OrderState } from "../../../util/types/types";
import { formatDatePretty } from "../../../util/util";
import { ItemForm } from "./ItemForm"

export function Items({data}: {data: GetOrderDataRes}) {
  return (
    <div className=" flex flex-col items-center w-full">
      {data.bodyData.map((item, index) => (
        <div className=" flex flex-col w-full my-[0.75rem]" key={index}>
          <ItemText item={item} />
          <ItemForm item={item} />
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

