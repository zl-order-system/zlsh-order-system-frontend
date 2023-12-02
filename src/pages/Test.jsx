// 測試頁面不要管
import { useState, useEffect } from "react";

function main() {
  const [list, setlist] = useState([1, 2, 3, 4, 5])
  let cl = (e) => {
    const newList = [...list];
    newList[e] = "clicked";
    setlist(newList);
  }
  let o = list.map((item, index) => {
    return <div className=" w-ful bg-yellow-400 text-lg m-4 text-center" key={index} onClick={() => cl(index)}>{item}</div>
  })
  return (
    <div className="block">
      {o}
    </div>
  )

}

export default main