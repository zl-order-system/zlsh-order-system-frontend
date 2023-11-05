function Order(){
    return(
        <div className=" mx-[1rem] my-[3rem] flex flex-col justify-between gap-[0.7rem] ">
            <div className=" flex  flex-row justify-between items-center">
                <div className="text-[1.8rem] text-[black] font-[700]">預定</div>
                <a href="https://www.zlsh.tp.edu.tw/category/office/div_300/section_lunch/lunch1_list/"><div className="text-[1.2rem] text-[#00AEB9] underline font-[400]">查看菜單</div></a>
            </div>
            <div className=" border-[1px] border-[#ACACAC] rounded-[1.3rem] bg-[white]  shadow-[0px 4px 8px 0px rgba(90, 90, 90, 0.25)] py-[1.3rem] px-[1.9rem]  ">
                <Item/>
            </div>
        </div>
    )
}
function Item(){
    return(
        <div>
            <div className=" flex  flex-row justify-between items-center">
                <div className="text-[1.7rem] text-[black] font-[700]">8月 29日</div>
                <button className="rotate-0">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <path d="M10.3595 30.9221C10.5416 31.1056 10.7582 31.2513 10.9968 31.3507C11.2355 31.4502 11.4914 31.5013 11.75 31.5013C12.0085 31.5013 12.2645 31.4502 12.5031 31.3507C12.7417 31.2513 12.9583 31.1056 13.1404 30.9221L22.1095 21.9529C22.2916 21.7694 22.5082 21.6237 22.7468 21.5242C22.9855 21.4248 23.2414 21.3736 23.5 21.3736C23.7585 21.3736 24.0144 21.4248 24.2531 21.5242C24.4917 21.6237 24.7083 21.7694 24.8904 21.9529L33.8595 30.9221C34.0416 31.1056 34.2582 31.2513 34.4968 31.3507C34.7355 31.4502 34.9914 31.5013 35.25 31.5013C35.5085 31.5013 35.7644 31.4502 36.0031 31.3507C36.2417 31.2513 36.4583 31.1056 36.6404 30.9221C37.0051 30.5552 37.2098 30.0588 37.2098 29.5414C37.2098 29.0241 37.0051 28.5277 36.6404 28.1608L27.6516 19.1721C26.5501 18.0719 25.0568 17.4539 23.5 17.4539C21.9431 17.4539 20.4499 18.0719 19.3483 19.1721L10.3595 28.1608C9.9948 28.5277 9.79007 29.0241 9.79007 29.5414C9.79007 30.0588 9.9948 30.5552 10.3595 30.9221Z" fill="black" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-[0.3rem]">
                    <select className=" w-[5rem] h-[1.8rem] text-[1.3rem] text-[#6C6C6C] font-[400]  rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] ">
                        <option value="">方式</option>
                        <option value="own">自備餐盒</option>
                        <option value="school">學校餐盒</option>
                    </select>
                    <select className=" w-[5rem] h-[1.8rem] text-[1.3rem] text-[#6C6C6C] font-[400] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] ">
                        <option value="mealNum">餐號</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div className="  translate-y-[0.5rem] text-[1rem] text-[#6C6C6C] font-[400] ">65元</div>
                </div>
                <button><div className=" text-[1.625rem] text-[#00C0CC] font-[600] ">預定</div></button>
            </div>
        </div>
    )
}
export default Order