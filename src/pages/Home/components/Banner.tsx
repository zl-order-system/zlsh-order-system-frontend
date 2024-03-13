import { GetHomeDataRes } from "../../../API/schema/home";
import { getDate } from "../../../util/util";

export function Banner({ homeData }: {homeData: GetHomeDataRes }) {
  const text = getBannerText(homeData.bannerData.hasPaidToday)
  const currentDate = getDate();
  return (
    <div className="mt-10 mx-4 h-64 bg-[#00AEB9] rounded-[1.25rem] grid place-content-center font-[inter] grid-cols-[4.5fr_5.5fr] grid-rows-[1fr_1px_1fr] shadow-lg">
      {/* 代繳金額 */}
      <div className='h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-[1.5rem]'>代繳金額</div>
        <div className='pl-6 text-[3rem] text-white'>{ homeData["bannerData"]["owed"] }$</div>
      </div>
      {/* 未繳錢 */}
      <div className="h-full flex flex-col justify-center text-center gap-2">
        <span className="text-[#EEFF2B] font-semibold text-[1.5rem]">{ text.title }</span>
        <span className="text-[#DFDFDF] text-[1.25rem]">{ text.content }</span>
      </div>
      {/* 分隔線 */}
      <span className="mx-auto block w-11/12 bg-[#D7D7D7] h-[1px] col-span-2"></span>
      {/* 已訂餐天數 */}
      <div className=' h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-2xl'>已訂餐天數</div>
        <div className='pl-6 text-[2.5rem] text-white'>{ homeData["bannerData"]["daysOrdered"] }天</div>
      </div>
      {/* 日期 */}
      <div className='h-full flex flex-col text-center justify-center items-center'>
        <span className="block text-3xl text-[#DFDFDF]">{ currentDate.month }月{ currentDate.date }日</span>
        <span className="block text-3xl text-[#DFDFDF]">{ currentDate.day }</span>
      </div>
    </div>
  )
}

function getBannerText(state: boolean) {
  return state? {title: "今日已繳費", content: ""} : {title: "今日尚未繳費", content: "請儘速向幹部繳納"}
  // switch (state) {
  //   case OrderState.PAID:
  //     return {title: "今日已繳費", content: ""}
  //   case OrderState.UNORDERED:
  //     return {title: "今日未訂餐", content: "請儘速訂餐"}
  //   case OrderState.UNPAID:
  //     return {title: "今日尚未繳費", content: "請儘速向幹部繳納"}
  // }
}
