import { useState } from 'react'


function App() {
  const weekdays = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
  let month = 9;
  let date = 29;

  return (
   <div className="flex flex-col gap-12">
    <div className="mt-10 mx-4 h-64 bg-[#00AEB9] rounded-[1.25rem] grid place-content-center font-[inter] grid-cols-[4.5fr_5.5fr] grid-rows-[1fr_1px_1fr] shadow-lg">
      {/* 代繳金額 */}
      <div className='h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-[1.5rem]'>代繳金額</div>
        <div className='pl-6 text-[3rem] text-white'>65$</div>
      </div>
      {/* 未繳錢 */}
      <div className="h-full flex flex-col justify-center text-center gap-2">
        <span className="text-[#EEFF2B] font-semibold text-[1.5rem]">今日尚未繳錢</span>
        <span className="text-[#DFDFDF] text-[1.25rem]">請儘速向幹部繳納</span>
      </div>
      {/* 分隔線 */}
      <span class="mx-auto block w-11/12 bg-[#D7D7D7] h-[1px] col-span-2"></span>
      {/* 已訂餐天數 */}
      <div className=' h-full pt-4 pl-6 flex flex-col'>
        <div className='text-white text-2xl'>已訂餐天數</div>
        <div className='pl-6 text-[2.5rem] text-white'>一天</div>
      </div>
      {/* 日期 */}
      <div className='h-full flex flex-col text-center justify-center items-center'>
        <span className="block text-3xl text-[#DFDFDF]">{month}月{date}日</span>
        <span className="block text-3xl text-[#DFDFDF]">{weekdays[5]}</span>
      </div>
    </div>
    <div className="flex justify-evenly">
      <div className="relative grid place-content-center grid-cols-1 grid-rows-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
        </svg>
        <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_58_111)">
            <path d="M18 36C21.5601 36 25.0402 34.9443 28.0003 32.9665C30.9604 30.9886 33.2675 28.1774 34.6298 24.8883C35.9922 21.5992 36.3487 17.98 35.6541 14.4884C34.9596 10.9967 33.2453 7.78943 30.7279 5.27209C28.2106 2.75474 25.0033 1.04041 21.5116 0.345873C18.02 -0.348661 14.4008 0.00779915 11.1117 1.37018C7.82263 2.73255 5.01141 5.03966 3.03355 7.99974C1.05568 10.9598 0 14.4399 0 18C0.00516162 22.7723 1.90324 27.3477 5.27778 30.7222C8.65232 34.0968 13.2277 35.9948 18 36ZM18 7.50001C18.445 7.50001 18.88 7.63197 19.25 7.8792C19.62 8.12643 19.9084 8.47784 20.0787 8.88897C20.249 9.3001 20.2936 9.7525 20.2068 10.189C20.12 10.6254 19.9057 11.0263 19.591 11.341C19.2763 11.6557 18.8754 11.87 18.439 11.9568C18.0025 12.0436 17.5501 11.999 17.139 11.8287C16.7278 11.6584 16.3764 11.3701 16.1292 11C15.882 10.63 15.75 10.195 15.75 9.75001C15.75 9.15327 15.9871 8.58097 16.409 8.15902C16.831 7.73706 17.4033 7.50001 18 7.50001ZM16.5 15H18C18.7957 15 19.5587 15.3161 20.1213 15.8787C20.6839 16.4413 21 17.2044 21 18V27C21 27.3978 20.842 27.7794 20.5607 28.0607C20.2794 28.342 19.8978 28.5 19.5 28.5C19.1022 28.5 18.7206 28.342 18.4393 28.0607C18.158 27.7794 18 27.3978 18 27V18H16.5C16.1022 18 15.7206 17.842 15.4393 17.5607C15.158 17.2794 15 16.8978 15 16.5C15 16.1022 15.158 15.7207 15.4393 15.4393C15.7206 15.158 16.1022 15 16.5 15Z" fill="#00C0CC"/>
          </g>
          <defs>
            <clipPath id="clip0_58_111">
              <rect width="36" height="36" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
   </div>
  )
}

export default App
