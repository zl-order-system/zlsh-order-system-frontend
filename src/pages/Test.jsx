// 測試頁面不要管
import { useState,useEffect } from "react";
import { fetchOrderData } from "../../API/API.js";

function c(){
  const [orderData,setOrderData] = useState(null) //取得使用者訂餐資料
  useEffect(()=>{
      fetchOrderData().then((value)=>{
          setOrderData(value)
      })
  },[])
  // useEffect(() => {    搞死人的異步
  //   console.log(orderData);
  // }, [orderData]);
  return <E r={orderData}/>
}
function E({r}){
  console.log(r)
  if(r==null) return
  return <div>{r[0]["month"]}</div>
}
export default c