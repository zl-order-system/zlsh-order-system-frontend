import { GetOrderDataRes } from "../../API/schema/manage"
import { Items } from "./conponents/Items"
import { Preview } from "./conponents/Preview"
import orderData from "./data"

const data: GetOrderDataRes = orderData

export function Manage() {
  return (
    <div className="w-full h-full overflow-scroll pb-16 px-[1.8rem] pt-[1rem] flex flex-col">
      <div className="text-black text-[1.8rem] font-[700]">訂餐管理</div>
      <Preview data={data}/>
      <Items data={data}/>
    </div>
  )
}
