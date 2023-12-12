export default function Account() {
  return (
    <div className="w-full h-full overflow-scroll pb-16 flex flex-col items-center py-10 gap-10">
      <div className="flex flex-col items-center gap-8">
        <img className="w-48 h-48 rounded-full border-4 border-teal-900" src="https://via.placeholder.com/192x192"></img>
        <h1 className="text-black text-4xl font-bold font-['Roboto Slab']">周奕宇</h1>
      </div>
      <div className="flex flex-col text-left gap-2 w-fit">
        <div>
          <h3 className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">學號</h3>
          <p className="pl-2 text-black text-2xl font-normal font-['Roboto Mono for Powerline']">11230155</p>
        </div>
        <div>
          <h3><span className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">Google </span><span className="text-neutral-400 text-[19px] font-bold font-['Roboto Slab']">名稱</span></h3>
          <p className="pl-2 text-black text-2xl font-normal font-['Roboto Mono for Powerline']">10922周奕宇</p>
        </div>
        <div>
          <h3 className="text-neutral-400 text-xl font-bold font-['Roboto Slab']">Email</h3>
          <p className="pl-2 text-black text-xl font-normal font-['Roboto Mono for Powerline']">s11230155@zlsh.tp.edu.tw</p>
        </div>
        <div>
          <label for="class" className="block text-neutral-400 text-xl font-bold font-['Roboto Slab']">班級</label>
          <input name="class" type="text" className="pl-2 outline-none border-b-2 border-b-neutral-400 text-black text-2xl font-normal font-['Roboto Mono for Powerline']"></input>
        </div>
        <div>
          <label for="seat" className="block text-neutral-400 text-xl font-bold font-['Roboto Slab']">座號</label>
          <input name="seat" type="text" className="pl-2 outline-none border-b-2 border-b-neutral-400 text-black text-2xl font-normal font-['Roboto Mono for Powerline']"></input>
        </div>
        <div className="grid place-content-center pt-4">
          <button class="text-center text-sky-400 text-2xl font-bold">送出</button>
        </div>
      </div>
    </div>
  )
}
