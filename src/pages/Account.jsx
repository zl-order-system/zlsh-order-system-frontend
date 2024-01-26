import { useState, useEffect } from "react"
import Loader from "../components/loader/Loader"
import { getAccount } from "../API/API";

export default function Account() {
  const [HTML, setHTML] = useState(<Loader/>)
  const [data, setData] = useState(null)

  useEffect(() => {
    getAccount().then(value => {
        setData(JSON.parse(value))
    }).catch((error) => {
      console.log(error)
        setHTML(
            <div>
                <div>{`發生錯誤：${error.status}`}</div>
                <div>{`測試模式(flask)：${error.testMode}`}</div>
            </div>
        )
    })
}, []);

useEffect(() => {
  if (data != null) {
      setHTML(
        <div className="w-full h-full overflow-scroll pb-16 flex flex-col items-center py-10 gap-10">
        <div className="flex flex-col items-center gap-8">
          <img className="w-48 h-48 rounded-full border-4 border-teal-900" src={data["avatarUrl"]}></img>
          <h1 className="text-black text-4xl font-bold font-['Roboto Slab']">{data["name"]}</h1>
        </div>
        <div className="flex flex-col text-left gap-2 w-fit">
          <div>
            <h3 className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">學號</h3>
            <p className="pl-2 text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["id"]}</p>
          </div>
          <div>
            <h3><span className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">Google </span><span className="text-neutral-400 text-[19px] font-bold font-['Roboto Slab']">名稱</span></h3>
            <p className="pl-2 text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["googleName"]}</p>
          </div>
          <div>
            <h3 className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">Email</h3>
            <p className="pl-2 text-black text-xl font-normal font-['Roboto Mono for Powerline']">{data["email"]}</p>
          </div>
          <div>
            <label htmlFor="class" className="block text-neutral-400 text-xl font-bold font-['Roboto Slab']">班級</label>
            <div name="class" type="text" className="pl-2 outline-none text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["class"]}</div>
          </div>
          <div>
            <label htmlFor="seat" className="block text-neutral-400 text-xl font-bold font-['Roboto Slab']">座號</label>
            <div className="pl-2 outline-none text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["seatNumber"]}</div>
          </div>
        </div>
      </div>
      );
  }
}, [data])
  return HTML
}
