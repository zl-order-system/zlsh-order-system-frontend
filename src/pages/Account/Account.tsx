import { useQuery } from "react-query";
import { fetchBackendCurry } from "../../API/util";
import { GetAccountDataRes, zGetAccountDataRes } from "../../API/schema/account";
import { logout } from "../../util/token";
import Loader from "../../components/Loader/Loader";

// const data = {
//   name: "周奕宇 社長",
//   id: 11230157,
//   googleName: "10922周奕宇",
//   email: "s11230155@zlsh.tp.edu.tw",
//   classNumber: 109,
//   seatNumber: 22,
// };

export function AccountWrapper() {
  const {data} = useQuery({
    queryKey: ["fetchAccountData"],
    queryFn: fetchBackendCurry("/api/user/account", zGetAccountDataRes)
  });
  if (data === undefined) return <Loader/>;
  return <Account data={data}/>
}

function Account({data}: {data: GetAccountDataRes}) {
  return (
    <div className="w-full h-full overflow-scroll pb-16 flex flex-col items-center py-10 gap-10">
      <div className="flex flex-col items-center gap-8">
        <img className="w-48 h-48 object-cover rounded-full border-4 border-teal-900" src={"https://scontent.xx.fbcdn.net/v/t1.15752-9/440589611_2658993050943555_6095489798070735646_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5zoquHk3oSQQ7kNvgEVxTe5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFi1_8hNTndk4iBZKWJLToJU7TqNCs7lhaJxzJ7ZfZMRQ&oe=666531A5"}></img>
        <h1 className="text-black text-4xl font-bold">{data.name}</h1>
      </div>
      <div className="flex flex-col text-left gap-2 w-fit">
        <div>
          <h3 className="text-neutral-400 text-xl font-bold">學號</h3>
          <p className="pl-2 text-black text-2xl font-normal">{data.id}</p>
        </div>
        <div>
          <h3><span className="text-neutral-400 text-xl font-bold">Google </span><span className="text-neutral-400 text-[19px] font-bold">名稱</span></h3>
          <p className="pl-2 text-black text-2xl font-normal">{data.googleName}</p>
        </div>
        <div>
          <h3 className="text-neutral-400 text-xl font-bold">Email</h3>
          <p className="pl-2 text-black text-xl font-normal">{data.email}</p>
        </div>
        <div>
          <label htmlFor="class" className="block text-neutral-400 text-xl font-bold">班級</label>
          <div className="pl-2 outline-none text-black text-2xl font-normal">{data.classNumber}</div>
        </div>
        <div>
          <label htmlFor="seat" className="block text-neutral-400 text-xl font-bold">座號</label>
          <div className="pl-2 outline-none text-black text-2xl font-normal">{data.seatNumber}</div>
        </div>
        <div className="grid place-content-center pt-4">
          <button className="text-center text-sky-400 text-2xl font-bold" onClick={logout}>登出</button>
        </div>
      </div>
    </div>
  )
}
