import "../successHint/successHint.css"
import React from 'react';
import checkIcon  from "../successHint/check.svg"
function SuccessHint({ state, text, set }){
    if (state != "open") return null
    setTimeout(()=>{
        set(["",""])
    },5200)
    return (
        <div className="h-[3.3rem] rounded-[3.3rem] bg-white shadow-[0px_4px_8px_0px_rgba(90,90,90,0.25)] flex row items-center py-[1rem] justify-center opacity-0 open">
            <div className="w-[2.2rem] m-[0.8rem]"><img src={ checkIcon }/></div>
            <div className="gap-[1.2rem] text-black text-[1.2rem] font-[700] mr-[1rem]">{text}</div>
        </div>
    )
}
export default SuccessHint