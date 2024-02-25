import { GetManageDataResponse } from "../../../API/schema/Manage"
import { StateText } from "../Schema"
import { ItemContro } from "./itemContro"

export function Items({ data }: { data: GetManageDataResponse }) {
  return (
    <div className=" flex flex-col items-center w-full">
      {data.bodyData.map((item, index) => (
        <div className=" flex flex-col w-full my-[0.75rem]" key={index}>
          <ItemStateText item={ item } />
          <ItemContro item={ item } />
        </div>
      ))}
    </div>
  )
}

function ItemStateText({ item }: { item: GetManageDataResponse["bodyData"][0] }) {
  const Color = item.state === StateText.paid ? "#97D581" : item.state === StateText.notPaid ? "#E2473D" : "#D0CFCF"
  return (
    <div className=" flex flex-row justify-between">
      <div className=" text-black text-[1.5rem] font-[700]">{item.displayDate}</div>
      <div className={`text-[${Color}] text-[1.5rem] font-[600]`}>{item.state}</div>
    </div>
  )
}

