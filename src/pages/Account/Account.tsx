export function Account() {
  const data = {
    name: "周奕宇 社長",
    id: 11230157,
    googleName: "10922周奕宇",
    email: "s11230155@zlsh.tp.edu.tw",
    classNumber: 109,
    seatNumber: 22,
  };
  const logout = () => {};
  return (
    <div className="w-full h-full overflow-scroll pb-16 flex flex-col items-center py-10 gap-10">
      <div className="flex flex-col items-center gap-8">
        <img className="w-48 h-48 rounded-full border-4 border-teal-900" src={"https://upload.wikimedia.org/wikipedia/zh/4/4b/Zhonglun_High_School_flat.png"}></img>
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
