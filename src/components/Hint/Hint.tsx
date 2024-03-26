import successIcon from "../../assets/svg/check.svg"
import errorIcon from "../../assets/svg/xmark.svg"
import { HintData, HintType, SetState } from "../../util/types/types"

// export function Hint({hintRef}: {hintRef: React.RefObject<HintRef | undefined>}){
//   const [hintData, setHintData] = useState<{text: string, hintType: HintType}>()
//   useEffect(() => {
//     if (hintRef.current?.state === "close" || hintRef.current?.state === undefined) return
//     setHintData({
//       text: hintRef.current?.text,
//       hintType: hintRef.current?.hintType
//     })
//   }, [hintRef])

//   if (hintRef.current?.state === "close" || hintRef.current?.state === undefined) return
//   const icon = hintData?.hintType === HintType.success ? successIcon : errorIcon
//   return (
//     <div className="h-[3.3rem] rounded-[3.3rem] bg-white shadow-[0px_4px_8px_0px_rgba(90,90,90,0.25)] flex row items-center py-[1rem] justify-center z-50 fixed translate-x-[-50%] left-[50%]">
//       <div className="w-[2.2rem] m-[0.8rem]"><img src={icon}/></div>
//       <div className="gap-[1.2rem] text-black text-[1.2rem] font-[700] mr-[1rem]">{}</div>
//     </div>
//   )
// }

export function Hint({hintData}: {hintData: HintData}){
  const icon = hintData?.hintType === HintType.success ? successIcon : errorIcon
  if (hintData === undefined) return
  return (
    <div className="h-[3.3rem] rounded-[3.3rem] bg-white shadow-[0px_4px_8px_0px_rgba(90,90,90,0.25)] flex row items-center py-[1rem] justify-center z-50 fixed translate-x-[-50%] left-[50%] top-3">
      <div className="w-[2.2rem] m-[0.8rem]"><img src={icon}/></div>
      <div className="gap-[1.2rem] text-black text-[1.2rem] font-[700] mr-[1rem]">{hintData.text}</div>
    </div>
  )
}

export function hintPopUp(hintType: HintType, text: string, setHintData: SetState<HintData>){
  const clearState = () => setHintData(undefined)
  setHintData(hintData => {
    // 判斷之前的Hint是否結束
    if(hintData !== undefined){
      clearTimeout(hintData.timer)
    }
    return {
      hintType: hintType,
      text: text,
      timer: setTimeout(clearState, 2000)
    }
  })
}
