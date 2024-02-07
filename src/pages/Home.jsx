import { doError, getHomeData } from "../API/API.js";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import Loader from "../components/loader/Loader.jsx";
import manageLogo from "../svg/manageLogo.svg"
import { loginCheck } from "../utils/token.js";


const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

function Banner({ HomeData }) {
  if(HomeData==null)return
  const currentDate = new Date();
  let month = currentDate.getMonth()+1
  let date = currentDate.getDate()
  let weekday = weekdays[currentDate.getDay()]
  const stateText = []
  switch (HomeData["bannerData"]["hasPaidToday"]) {
    case true:
      stateText[0] = "今日已繳費"
      stateText[1] = ""
      break;
    case false:
      stateText[0] = "今日尚未繳費"
      stateText[1] = "請儘速向幹部繳納"
      break
    case null:
      stateText[0] = "今日未訂餐"
      stateText[1] = "請儘速訂餐"
    default:
      break;
  }
  return (
    <div className="mt-10 mx-4 h-64 bg-[#00AEB9] rounded-[1.25rem] grid place-content-center font-[inter] grid-cols-[4.5fr_5.5fr] grid-rows-[1fr_1px_1fr] shadow-lg">
      {/* 代繳金額 */}
      <div className='h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-[1.5rem]'>代繳金額</div>
        <div className='pl-6 text-[3rem] text-white'>{ HomeData["bannerData"]["owed"] }$</div>
      </div>
      {/* 未繳錢 */}
      <div className="h-full flex flex-col justify-center text-center gap-2">
        <span className="text-[#EEFF2B] font-semibold text-[1.5rem]">{ stateText[0] }</span>
        <span className="text-[#DFDFDF] text-[1.25rem]">{ stateText[1] }</span>
      </div>
      {/* 分隔線 */}
      <span className="mx-auto block w-11/12 bg-[#D7D7D7] h-[1px] col-span-2"></span>
      {/* 已訂餐天數 */}
      <div className=' h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-2xl'>已訂餐天數</div>
        <div className='pl-6 text-[2.5rem] text-white'>{ HomeData["bannerData"]["daysOrdered"] }天</div>
      </div>
      {/* 日期 */}
      <div className='h-full flex flex-col text-center justify-center items-center'>
        <span className="block text-3xl text-[#DFDFDF]">{month}月{date}日</span>
        <span className="block text-3xl text-[#DFDFDF]">{weekday}</span>
      </div>
    </div>
  )
}

function UtilButtons({ HomeData }) {
  if(HomeData==null)return
  return (
    <div className="flex justify-evenly">
      <button className='flex flex-col justify-center items-center'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
              <g clipPath="url(#clip0_127_6)">
                <path d="M36 54C39.5601 54 43.0402 52.9443 46.0003 50.9665C48.9604 48.9886 51.2675 46.1774 52.6298 42.8883C53.9922 39.5992 54.3487 35.98 53.6541 32.4884C52.9596 28.9967 51.2453 25.7894 48.7279 23.2721C46.2106 20.7547 43.0033 19.0404 39.5116 18.3459C36.02 17.6513 32.4008 18.0078 29.1117 19.3702C25.8226 20.7326 23.0114 23.0397 21.0335 25.9997C19.0557 28.9598 18 32.4399 18 36C18.0052 40.7723 19.9032 45.3477 23.2778 48.7222C26.6523 52.0968 31.2277 53.9948 36 54ZM36 25.5C36.445 25.5 36.88 25.632 37.25 25.8792C37.62 26.1264 37.9084 26.4778 38.0787 26.889C38.249 27.3001 38.2936 27.7525 38.2068 28.189C38.12 28.6254 37.9057 29.0263 37.591 29.341C37.2763 29.6557 36.8754 29.87 36.439 29.9568C36.0025 30.0436 35.5501 29.999 35.139 29.8287C34.7278 29.6584 34.3764 29.3701 34.1292 29C33.882 28.63 33.75 28.195 33.75 27.75C33.75 27.1533 33.9871 26.581 34.409 26.159C34.831 25.7371 35.4033 25.5 36 25.5ZM34.5 33H36C36.7957 33 37.5587 33.3161 38.1213 33.8787C38.6839 34.4413 39 35.2044 39 36V45C39 45.3978 38.842 45.7794 38.5607 46.0607C38.2794 46.342 37.8978 46.5 37.5 46.5C37.1022 46.5 36.7206 46.342 36.4393 46.0607C36.158 45.7794 36 45.3978 36 45V36H34.5C34.1022 36 33.7206 35.842 33.4393 35.5607C33.158 35.2794 33 34.8978 33 34.5C33 34.1022 33.158 33.7207 33.4393 33.4393C33.7206 33.158 34.1022 33 34.5 33Z" fill="#00C0CC"/>
              </g>
            <defs>
            <clipPath id="clip0_127_6">
              <rect width="36" height="36" fill="white" transform="translate(18 18)"/>
            </clipPath>
          </defs>
        </svg>
        <span className='font-bold text-center py-0.5'>使用說明</span>
      </button>
      <Link to={"/meals"}>
        <button className='flex flex-col justify-center items-center' >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
            <g clipPath="url(#clip0_127_7)">
              <path d="M41.5 18H26.5C22.3645 18 19 21.3645 19 25.5V46.5C19 50.6355 22.3645 54 26.5 54H41.5C45.6355 54 49 50.6355 49 46.5V25.5C49 21.3645 45.6355 18 41.5 18ZM31 46.5C31 47.328 30.328 48 29.5 48H26.5C25.672 48 25 47.328 25 46.5V43.5C25 42.672 25.672 42 26.5 42H29.5C30.328 42 31 42.672 31 43.5V46.5ZM31 37.5C31 38.328 30.328 39 29.5 39H26.5C25.672 39 25 38.328 25 37.5V34.5C25 33.672 25.672 33 26.5 33H29.5C30.328 33 31 33.672 31 34.5V37.5ZM31 28.5C31 29.328 30.328 30 29.5 30H26.5C25.672 30 25 29.328 25 28.5V25.5C25 24.672 25.672 24 26.5 24H29.5C30.328 24 31 24.672 31 25.5V28.5ZM41.5 46.5H35.5C33.538 46.491 33.5395 43.509 35.5 43.5H41.5C43.462 43.509 43.4605 46.491 41.5 46.5ZM41.5 37.5H35.5C33.538 37.491 33.5395 34.509 35.5 34.5H41.5C43.462 34.509 43.4605 37.491 41.5 37.5ZM41.5 28.5H35.5C33.538 28.491 33.5395 25.509 35.5 25.5H41.5C43.462 25.509 43.4605 28.491 41.5 28.5Z" fill="#00C0CC"/>
            </g>
            <defs>
              <clipPath id="clip0_127_7">
                <rect width="36" height="36" fill="white" transform="translate(16 18)"/>
              </clipPath>
            </defs>
          </svg>
          <span className='font-bold text-center py-0.5'>查看菜單</span>
        </button>
      </Link>
      <Link to={"/manage"}>
      <button className='flex flex-col justify-center items-center'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
          <g clipPath="url(#clip0_127_8)">
            <path d="M36 28.5V18.69C37.3695 19.209 38.6295 20.0085 39.6975 21.075L44.9235 26.304C45.9915 27.3705 46.791 28.6305 47.31 30H37.5C36.672 30 36 29.3265 36 28.5ZM37.905 47.22C36.6855 48.4395 36 50.0925 36 51.8175V54H38.1825C39.9075 54 41.5605 53.3145 42.78 52.095L52.9905 41.8845C54.336 40.539 54.336 38.355 52.9905 37.0095C51.645 35.664 49.461 35.664 48.1155 37.0095L37.905 47.22ZM33 51.8175C33 49.2795 33.9885 46.893 35.7825 45.099L45.993 34.8885C46.5765 34.305 47.256 33.8565 47.9895 33.537C47.9835 33.357 47.976 33.1785 47.964 32.9985H37.5C35.019 32.9985 33 30.9795 33 28.4985V18.036C32.7585 18.0195 32.517 18 32.2725 18H25.5C21.3645 18 18 21.3645 18 25.5V46.5C18 50.6355 21.3645 54 25.5 54H33V51.8175Z" fill="#00C0CC"/>
          </g>
          <defs>
            <clipPath id="clip0_127_8">
              <rect width="36" height="36" fill="white" transform="translate(18 18)"/>
            </clipPath>
          </defs>
        </svg>
        <span className='font-bold text-center py-0.5'>我的訂餐</span>
      </button>
      </Link>
    </div>
  )
}
function EachDay({ date, orderState }){
  let orderHTML
  const year = date.split("-")[0]
  const month = date.split("-")[1]
  const day = date.split("-")[2]
  const week = weekdays[new Date(year, month-1, day).getDay()];
  if( orderState ){
    orderHTML = <div className=" text-[#525252] text-[1.6rem] font-[600] text-center">已預訂</div>
  }else if( !orderState ){
    orderHTML = <Link to={"/manage"}><button className=" text-[#00C0CC] text-[1.6rem] font-[600] text-center -translate-x-[50%] left-[50%] relative">預訂</button></Link>
  }
  return(
    <div className="w-[9.7rem] min-w-[9.7rem] h-[9.7rem] border-[1px] border-[#ACACAC] rounded-[1.3rem]">
      <div className=" text-black text-[1.3rem] font-[700] ml-[1rem]">{ month }月</div>
      <div className=" text-black text-[2.8rem] font-[400] leading-[2.8rem] text-center">{ day }</div>
      <div className=" text-[#6C6C6C] text-[1.3rem] font-[400] text-center">{ week }</div>
      {orderHTML}
    </div>
  )
}
function OrderPreveiw({ HomeData }){
  if(HomeData==null)return
  return(
    <div className="flex gap-[1rem] flex-col mx-[1.5rem]">
      <div className="flex justify-between">
        <div className="text-black text-[1.8rem] font-[700]">預覽</div>
        <Link to={"/manage"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
          <g clipPath="url(#clip0_58_99)">
          <path d="M6.5625 35L28.4375 35C32.0556 35 35 32.0556 35 28.4375L35 6.5625C35 2.94437 32.0556 0 28.4375 0L6.5625 0C2.94437 0 0 2.94437 0 6.5625L0 28.4375C0 32.0556 2.94437 35 6.5625 35ZM1.45833 6.5625C1.45833 3.74792 3.74792 1.45833 6.5625 1.45833L28.4375 1.45833C31.2521 1.45833 33.5417 3.74792 33.5417 6.5625L33.5417 28.4375C33.5417 31.2521 31.2521 33.5417 28.4375 33.5417L6.5625 33.5417C3.74792 33.5417 1.45833 31.2521 1.45833 28.4375L1.45833 6.5625Z" fill="black"/>
          <path d="M9.47912 18.2292L24.6516 18.2292C24.5598 18.4873 24.4256 18.7323 24.2331 18.9481C23.8452 19.3871 23.4645 19.8042 23.1875 20.0813L19.0633 24.2798C18.7804 24.5671 18.7848 25.0294 19.072 25.3123C19.3608 25.5938 19.8231 25.5909 20.1031 25.3036L24.2229 21.1094C24.5116 20.8206 24.9156 20.3802 25.3254 19.9165C26.546 18.5398 26.546 16.4631 25.3254 15.0865C24.9141 14.6227 24.5102 14.1809 24.2273 13.8979L20.1031 9.6994C19.9602 9.55356 19.772 9.48211 19.5839 9.48211C19.4002 9.48211 19.215 9.5521 19.072 9.69065C18.7848 9.97356 18.7804 10.4344 19.0633 10.7231L23.1918 14.9261C23.4645 15.1988 23.8452 15.6159 24.2345 16.0548C24.4256 16.2706 24.5612 16.5156 24.6516 16.7738L9.47912 16.7738C9.07662 16.7738 8.74996 17.1004 8.74996 17.5029C8.74996 17.9054 9.07662 18.2321 9.47912 18.2321V18.2292Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_58_99">
          <rect width="35" height="35" fill="white" transform="matrix(-1 0 0 -1 35 35)"/>
          </clipPath>
          </defs>
          </svg>
        </Link>
      </div>
      <div className="flex flex-row justify-start flex-shrink-0 gap-5 overflow-scroll w-full py-4">
        {HomeData["previewData"].map((item, index) => <EachDay date={item["date"]} orderState={item["ordered"]} key={index}/>)}
      </div>
    </div>
  )
}

function ManagerButton({ HomeData }){
  if(HomeData["role"] == "USER") return null
  else if(HomeData["role"] == "ADMIN") return(
    <a href=""><div to={""} className="mx-4 bg-[#D5EFF9] rounded-[1.25rem] place-content-center font-[inter] shadow-[2px_3px_6px_1px_rgba(123,123,123,0.25)] flex justify-between py-[1.1rem]">
        <div className="ml-[2.5rem] "><img src={ manageLogo } /></div>
        <div className="w-full text-center text-[rgba(0,0,0,0.70)] text-[1.5rem] font-[600] tracking-[0.2rem]">進入後台管理系統</div>
    </div></a>
  )
}

function Home() {
  const [HomeData, setHomeData] = useState(null) //取得使用者訂餐資料
  const [HTML, setHTML] = useState(<Loader />)
  useEffect(()=>{
    if(HomeData != null){
      setHTML(
        <div className="flex flex-col gap-9 w-full h-full overflow-scroll pb-16">
        <Banner HomeData={HomeData} />
        <ManagerButton HomeData={HomeData} />
        <UtilButtons HomeData={HomeData} />
        <OrderPreveiw HomeData={HomeData} />
      </div>
      )
    }
  }, [HomeData])
  useEffect(() => {
    loginCheck()
    getHomeData().then((value) => {
      setHomeData(JSON.parse(value))
    }).catch((error) => {
      // doError(error, setHTML)
      setHTML(
        <div>
          <div>{`發生錯誤：${error.status}`}</div>
        </div>
      )
    })
  }, [])
  return HTML
}

export default Home
