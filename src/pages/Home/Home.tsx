import { useQuery } from "react-query"
import { Banner } from "./components/Banner"
import { Buttons } from "./components/Buttons"
import { Preview } from "./components/Preview"
import { fetchBackendCurry } from "../../API/util";
import { zGetHomeDataRes } from "../../API/schema/home";

export function Home() {
  const {data} = useQuery({
    queryKey: ["fetchOrderData"],
    queryFn: fetchBackendCurry("/api/user/home", zGetHomeDataRes)
  });
  if (data === undefined) return <></>;

  return (
    <div className="flex flex-col gap-9 w-full h-full overflow-scroll pb-16">
      <Banner HomeData={data} />
      <Buttons />
      <Preview  HomeData={data} />
    </div>
  )
}
