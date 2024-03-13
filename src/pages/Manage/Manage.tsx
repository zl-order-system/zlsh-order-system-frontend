import { useQuery } from "react-query";
import { Items } from "./conponents/Items"
import { Preview } from "./conponents/Preview"
import { fetchBackendCurry } from "../../API/util";
import { GetOrderDataRes, zGetOrderDataRes } from "../../API/schema/manage";
import { formatDatePretty } from "../../util/util";

export function Manage() {
  const {data, refetch} = useQuery({
    queryKey: ["fetchOrderData"],
    queryFn: fetchBackendCurry("/api/order", zGetOrderDataRes)
  });
  if (data === undefined) return <></>;

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
