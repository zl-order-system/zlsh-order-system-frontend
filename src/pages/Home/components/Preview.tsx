import { Link } from "react-router-dom"
import arrowIcon from "../../../svg/arrowIcon.svg"
import { GetHomeDataResponse } from "../schema"
import { getDate } from "../../../util/util"

export function Preview({ HomeData }: {HomeData: GetHomeDataResponse }) {
  return (
    <div className="flex gap-[1rem] flex-col mx-[1.5rem]">
      <div className="flex justify-between">
        <div className="text-black text-[1.8rem] font-[700]">預覽</div>
        <Link to={"/manage"}>
          <img src={ arrowIcon } alt="" />
        </Link>
      </div>
      <div className="flex flex-row justify-start flex-shrink-0 gap-5 overflow-scroll w-full py-4">
        <Items HomeData={ HomeData } />
      </div>
    </div>
  )
}

function Items({ HomeData }: {HomeData: GetHomeDataResponse }) {
  return HomeData.previewData.map((item, index) => (
    <EachDay item={ item } key={index} />
  ))
}

function EachDay({item} : {item: {date: number[], ordered: boolean}}) {
  const date = getDate(item.date)
  return (
    <div className="w-[9.7rem] min-w-[9.7rem] h-[9.7rem] border-[1px] border-[#ACACAC] rounded-[1.3rem]">
      <div className=" text-black text-[1.3rem] font-[700] ml-[1rem]">{ date.month }月</div>
      <div className=" text-black text-[2.8rem] font-[400] leading-[2.8rem] text-center">{ date.date }</div>
      <div className=" text-[#6C6C6C] text-[1.3rem] font-[400] text-center">{ date.day }</div>
      {item.ordered && <div className=" text-[#525252] text-[1.6rem] font-[600] text-center">已預訂</div>}
      {item.ordered || <Link to={"/manage"}><button className=" text-[#00C0CC] text-[1.6rem] font-[600] text-center -translate-x-[50%] left-[50%] relative">預訂</button></Link>}
    </div>
  )
}