import { OrderDataHeader } from "../../../API/schema/manage"
import { OrderState } from "../../../util/types/types"

export function Preview({barData, header}: {barData: {displayDate: string, state: OrderState}[], header: OrderDataHeader}) {
  return (
    <>
      <div className="flex flex-row justify-between my-[0.8rem]">
        <div className="text-black text-[1.2rem] font-[700]">已繳: {header.paid}元</div>
        <div className="text-black text-[1.2rem] font-[700]">未繳: {header.owed}元</div>
        <div className="text-black text-[1.2rem] font-[700]">未訂: {header.daysUnordered}天</div>
      </div>
      <div>
        <div className="h-[2rem] w-full bg-[#D0CFCF] rounded-[1.15rem] overflow-hidden flex flex-row">
          {barData.map((item, index) => {
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
          {barData.map((v, i) => <DateLabel index={i} key={i} displayDate={v.displayDate}/>)}
        </div>
        <div className="flex flex-row justify-start gap-[1.3rem] mb-[1.25rem]">
          <ColourLabel className="bg-[#97D581]">
            已繳費
          </ColourLabel>
          <ColourLabel className="bg-[#E2473D]">
            未繳費
          </ColourLabel>
          <ColourLabel className="bg-[#D0CFCF]">
            未訂餐
          </ColourLabel>
        </div>
      </div>
    </>
  )
}

function DateLabel({index, displayDate}: {index: number, displayDate: string}) {
  return (
    <div className="flex flex-col flex-1 items-center translate-y-[-0.4rem]" key={index}>
      <div className="w-[1px] h-[1rem] bg-[#565656] opacity-70"></div>
      <div className="h-full  text-center text-[#565656] text-[0.8rem] font-[400]">{displayDate.split(" ")[0]}</div>
    </div>
  )
}

function ColourLabel({children, className}: {children: string, className: string}) {
  return (
    <div className="flex flex-row items-center">
      <div className={`${className} w-[0.8rem] h-[0.8rem] rounded-[50%] mr-[0.3rem]`}></div>
      <div className="text-[#565656] text-[0.8rem] font-[400]">{children}</div>
    </div>
  )
}
