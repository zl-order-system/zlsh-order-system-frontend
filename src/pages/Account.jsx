import { useState, useEffect } from "react"
import Loader from "../components/loader/Loader"
import { doError, getAccount } from "../API/API";
import { logout } from "../utils/token";

export default function Account() {
  const [HTML, setHTML] = useState(<Loader/>)
  const [data, setData] = useState(null)

  useEffect(() => {
    getAccount().then(value => {
        setData(JSON.parse(value))
    }).catch((error) => {
        doError(error, setHTML)
    })
}, []);

useEffect(() => {
  if (data != null) {
      setHTML(
        <div className="w-full h-full overflow-scroll pb-16 flex flex-col items-center py-10 gap-10">
        <div className="flex flex-col items-center gap-8">
          <img className="w-48 h-48 rounded-full border-4 border-teal-900" src={"https://upload.wikimedia.org/wikipedia/zh/4/4b/Zhonglun_High_School_flat.png"}></img>
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
            <div name="class" type="text" className="pl-2 outline-none text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["classNumber"]}</div>
          </div>
          <div>
            <label htmlFor="seat" className="block text-neutral-400 text-xl font-bold font-['Roboto Slab']">座號</label>
            <div className="pl-2 outline-none text-black text-2xl font-normal font-['Roboto Mono for Powerline']">{data["seatNumber"]}</div>
          </div>
          <div className="grid place-content-center pt-4">
            <button className="text-center text-sky-400 text-2xl font-bold" onClick={logout}>登出</button>
          </div>
        </div>
      </div>
      );
  }
}, [data])
  return HTML
}
