import { useQuery } from "react-query"
import { Banner } from "./components/Banner"
import { Buttons } from "./components/Buttons"
import { Preview } from "./components/Preview"
import { ManagementLink } from "./components/ManagementLink";
import { fetchBackendCurry } from "../../API/util";
import { GetHomeDataRes, zGetHomeDataRes } from "../../API/schema/home";
import Loader from "../../components/Loader/Loader";

export function Home() {
  const {data} = useQuery({
    queryKey: ["fetchHomeData"],
    queryFn: fetchBackendCurry("/api/user/home", zGetHomeDataRes)
  });
  if (data === undefined) return <Loader/>;
  const homeData = data as GetHomeDataRes;

  return (
    <div className="flex flex-col gap-9 w-full h-full overflow-scroll pb-16">
      <Banner homeData={homeData}/>
      <ManagementLink />
      <Buttons />
      <Preview homeData={homeData}/>
    </div>
  )
}
