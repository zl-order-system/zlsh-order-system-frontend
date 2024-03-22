import warningIcon from "../../assets/svg/yellowHint.svg"
export function Hint() {
  return (
    <div className="bg-[#FFF8C5] rounded-[0.75rem] w-full border-[2px] border-[rgba(212,167,44,0.40)] p-[0.5rem]">
      <img src={warningIcon} className="w-[1.4rem] inline mr-[0.5rem] mt-[-5px]" />
      <span className="text-[#1F2328] text-[1.1rem] font-[500]">
        本頁菜單均為系統自動生成，僅供參考 。請以
        <a className="text-[#0969DA] underline" href="https://www.zlsh.tp.edu.tw/category/office/div_300/section_lunch/lunch1_list/" target="_blank">
          學校公布的菜單
        </a>
        為準
      </span>
    </div>
  )
}
