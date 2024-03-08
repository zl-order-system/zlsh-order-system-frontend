import { Link } from "react-router-dom";
import introIcon from "../../../svg/introIcon.svg"
import mealsIcon from "../../../svg/mealsIcon.svg"
import myOrderIcon from "../../../svg/myOrderIcon.svg"



export function Buttons() {
  return (
    <div className="flex justify-evenly">
      <a href="https://hackmd.io/@tucker123/zl-order-system-intro" target="_blank">
        <button className="flex flex-col justify-center items-center">
          <img src={ introIcon } alt="" />
          <span className="font-bold text-center py-0.5">使用說明</span>
        </button>
      </a>
      <Link to={"/meals"}>
        <button className="flex flex-col justify-center items-center">
          <img src={ mealsIcon } alt="" />
          <span className="font-bold text-center py-0.5">查看菜單</span>
        </button>
      </Link>
      <Link to={"/manage"}>
        <button className="flex flex-col justify-center items-center">
          <img src={ myOrderIcon } alt="" />
          <span className="font-bold text-center py-0.5">我的訂餐</span>
        </button>
      </Link>
    </div>
  )
}
