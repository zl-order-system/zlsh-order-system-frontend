import Nav from "../components/Nav.jsx"
function Banner() {
  const weekdays = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
  let month = 9;
  let date = 29;

  return (
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
      <span className="mx-auto block w-11/12 bg-[#D7D7D7] h-[1px] col-span-2"></span>
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
  )
}

function UtilButtons() {
  return (
    <div className="flex justify-evenly">
      <button className='flex flex-col justify-center items-center'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
              <g clip-path="url(#clip0_127_6)">
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
      <button className='flex flex-col justify-center items-center'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
          <g clip-path="url(#clip0_127_7)">
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
      <button className='flex flex-col justify-center items-center'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="36" fill="#D5EFF9"/>
          <g clip-path="url(#clip0_127_8)">
            <path d="M36 28.5V18.69C37.3695 19.209 38.6295 20.0085 39.6975 21.075L44.9235 26.304C45.9915 27.3705 46.791 28.6305 47.31 30H37.5C36.672 30 36 29.3265 36 28.5ZM37.905 47.22C36.6855 48.4395 36 50.0925 36 51.8175V54H38.1825C39.9075 54 41.5605 53.3145 42.78 52.095L52.9905 41.8845C54.336 40.539 54.336 38.355 52.9905 37.0095C51.645 35.664 49.461 35.664 48.1155 37.0095L37.905 47.22ZM33 51.8175C33 49.2795 33.9885 46.893 35.7825 45.099L45.993 34.8885C46.5765 34.305 47.256 33.8565 47.9895 33.537C47.9835 33.357 47.976 33.1785 47.964 32.9985H37.5C35.019 32.9985 33 30.9795 33 28.4985V18.036C32.7585 18.0195 32.517 18 32.2725 18H25.5C21.3645 18 18 21.3645 18 25.5V46.5C18 50.6355 21.3645 54 25.5 54H33V51.8175Z" fill="#00C0CC"/>
          </g>
          <defs>
            <clipPath id="clip0_127_8">
              <rect width="36" height="36" fill="white" transform="translate(18 18)"/>
            </clipPath>
          </defs>
        </svg>
        <span className='font-bold text-center py-0.5'>訂單管理</span>
      </button>
    </div>
  )
}

function Home() {
  return (
   <div>
      <div className="flex flex-col gap-12 mb-[3.75rem]">
        <Banner/>
        <UtilButtons/>
        <div className="h-[500px] bg-black"></div>
      </div>
      <Nav/>
   </div>
  )
}

export default Home
