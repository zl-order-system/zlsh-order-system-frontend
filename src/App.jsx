import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="my-10 mx-[1rem] h-[15rem] bg-[#00AEB9] rounded-[1.25rem] flex">
    <div className='w-[50%] h-[50%] pt-[1rem] pl-[1.5rem]'>
      <div className='text-white text-[1.5rem]'>代繳金額</div>
      <div className='text-[3rem] text-white '>65$</div>
    </div>
    <div className='w-[50%] h-[50%] '></div>
   </div>
  )
}

export default App
