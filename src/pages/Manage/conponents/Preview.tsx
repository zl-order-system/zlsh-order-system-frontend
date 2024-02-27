import { GetOrderDataRes } from "../../../API/schema/manage"
import { OrderState } from "../../../util/types/types"

export function Preview({ data }: { data: GetOrderDataRes }) {
  return (
    <>
      <div className="flex flex-row justify-between my-[0.8rem]">
        <div className="text-black text-[1.2rem] font-[700]">已繳: {data.headerData.paid}元</div>
        <div className="text-black text-[1.2rem] font-[700]">未繳: {data.headerData.owed}元</div>
        <div className="text-black text-[1.2rem] font-[700]">未訂: {data.headerData.daysUnordered}天</div>
      </div>
      <div>
        <div className="h-[2rem] w-full bg-[#D0CFCF] rounded-[1.15rem] overflow-hidden flex flex-row">
          {data.bodyData.map((item, index) => {
            const className = "h-full flex-1 flex flex-col items-center"
            switch(item.state) {
            case OrderState.PAID:
              return <div className={`${className} bg-[#97D581]`} key={index}></div>;
            case OrderState.UNPAID:
              return <div className={`${className} bg-[#E2473D]`} key={index}></div>;
            case OrderState.UNORDERED:
              return <div className={`${className} bg-[#D0CFCF]`} key={index}></div>;
            }
          })}
        </div>
        <div className="w-full h-[2rem] flex flex-row">
          {data.bodyData.map((item, index) => (
            <div className="flex flex-col flex-1 items-center translate-y-[-0.4rem]" key={index}>
              <div className="w-[1px] h-[1rem] bg-[#565656] opacity-70"></div>
              <div className="h-full  text-center text-[#565656] text-[0.8rem] font-[400]">{item.displayDate}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-start gap-[1.3rem] mb-[1.25rem]">
          <div className="flex flex-row items-center">
            <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#97D581] mr-[0.3rem]"></div>
            <div className="text-[#565656] text-[0.8rem] font-[400]">已繳費</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#E2473D] mr-[0.3rem]"></div>
            <div className="text-[#565656] text-[0.8rem] font-[400]">未繳費</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#D0CFCF] mr-[0.3rem]"></div>
            <div className="text-[#565656] text-[0.8rem] font-[400]">未訂餐</div>
          </div>
        </div>
      </div>
    </>
  )
}
