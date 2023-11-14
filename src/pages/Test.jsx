// 測試頁面不要管
import { useState,useEffect } from "react";
import { fetchOrderData } from "../../API/API.js";

function c(){
[1,2,3].map((item,index)=>{console.log(index);})
}
function E({r}){
  console.log(r)
  if(r==null) return
  return <div>{r[0]["month"]}</div>
}
export default c