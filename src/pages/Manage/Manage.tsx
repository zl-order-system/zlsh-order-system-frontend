import { Items } from "./conponents/Items"
import { Preview } from "./conponents/Preview"
import { GetOrderDataRes, zGetOrderDataRes } from "../../API/schema/manage";
import { formatDatePretty } from "../../util/util";
import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import { getToken } from "../../util/token";
import { getAppConstants } from "../../util/constants";
import { zodParseStr } from "../../API/util";

export function Manage() {
  // const {data, refetch} = useQuery({
  //   queryKey: ["fetchOrderData"],
  //   queryFn: fetchBackendCurry("/api/order", zGetOrderDataRes)
  // });
  const [data, setData] = useState<any>(undefined);
  const sock = useRef(new WebSocket(`wss://${getAppConstants().BACKEND_HOST}/ws`));

  useEffect(() => {
    const socket = sock.current;

    socket.onopen = () => {
      socket.send(`AUTH\n${getToken()}`);
      socket.send(`GET\n-`);
    };
    socket.onmessage = ({data: sockData}) => {
      const message = sockData as string;
      console.log(message);
      const subStrings = message.split("\n");
      if (subStrings.length < 2) {
        console.log("Websocket Format Error");
        return;
      }
      if (subStrings[0] === "ERROR") {
        console.log("Websocket Error: " + message)
        return;
      }
      if (subStrings[0] === "SUCCESS") {
        console.log("Websocket Success: " + message)
        return;
      }
      if (subStrings[0] !== "UPDATE") {
        console.log("Websocket Client Bound Action Error");
        return;
      }
      (async () => setData(await zodParseStr(subStrings[1], zGetOrderDataRes)))();
    }
  }, []);

  function refetch() {}

  if (data === undefined) return <Loader/>;

  console.log(data);

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
