import { Banner } from "./components/Banner"
import { Buttons } from "./components/Buttons"
import { Preview } from "./components/Preview"
import { getHomeData } from "./getHomeData" 
import { GetHomeDataResponse } from "./schema"

export function Home() {
  const HomeData: GetHomeDataResponse = getHomeData()
  return (
    <div className="flex flex-col gap-9 w-full h-full overflow-scroll pb-16">
      <Banner HomeData={HomeData} />
      <Buttons />
      <Preview  HomeData={HomeData} />
    </div>
  )
}
