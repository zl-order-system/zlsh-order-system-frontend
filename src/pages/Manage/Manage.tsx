import { Items } from "./conponents/Items"
import { Preview } from "./conponents/Preview"
import { GetOrderDataRes } from "../../API/schema/manage";
import { formatDatePretty } from "../../util/util";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { getToken } from "../../util/token";
import { getAppConstants } from "../../util/constants";

export function Manage() {
  // const {data, refetch} = useQuery({
  //   queryKey: ["fetchOrderData"],
  //   queryFn: fetchBackendCurry("/api/order", zGetOrderDataRes)
  // });
  const [data, setData] = useState();

  useEffect(() => {
    const socket = new WebSocket(`wss://${getAppConstants().BACKEND_HOST}/api/order/realtime`);
    socket.onopen = () => socket.send(`AUTH\n${getToken()}`);
    socket.onmessage = ({data: sockData}) => {
      const subStrings = (sockData as string).split("\n");
      if (subStrings.length < 2) {
        console.log("Websocket Format Error");
        return;
      }
      if (subStrings[0] === "ERROR") {
        alert("Websocket Error: " + data)
        return;
      }
      if (subStrings[0] === "SUCCESS") {
        console.log("Websocket Success: " + data)
        return;
      }
      if (subStrings[0] !== "UPDATE") {
        console.log("Websocket Client Bound Action Error");
        return;
      }
      setData(JSON.parse(subStrings[1]));
    }
    socket.onopen = console.log
    socket.onmessage = console.log
    socket.onclose = console.log
  });

  function refetch() {}

  if (data === undefined) return <Loader/>;

  const orderData = data as GetOrderDataRes;

  return (
    <div className="w-full h-full overflow-scroll pb-16 px-[1.8rem] pt-[1rem] flex flex-col">
      <div className="text-black text-[1.8rem] font-[700]">訂餐管理</div>
      <Preview
        barData={orderData.bodyData.map(v => ({displayDate: formatDatePretty(v.date), state: v.state}))}
        header={orderData.headerData}
      />
      <Items data={orderData} refetch={refetch}/>
    </div>
  )
}
