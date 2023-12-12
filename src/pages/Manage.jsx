import { useState,useEffect } from "react"
import { fetchManageData, getCost} from "../API/API"

let originData;

function creatData(value){
    let returnData = {};
    returnData["headerPreviews"] = {
        "paid": value["headerPreviews"]["paid"],
        "unpaid": value["headerPreviews"]["unpaid"],
        "NotOrderedDays": value["headerPreviews"]["NotOrderedDays"],
        "css": {}
    };
    returnData["barChart"] = {}
    returnData["item"] = value["item"]
    value["item"].forEach((element, index) => {
        let displayOfOrderButton;
        let displayOfOrderEditButton;
        let stateOfPreviewTextColor;
        let displayOfOrderInformation;
        let displayOfSelectBlock;
        let opacityOfButton;
        let cursorOfButton;

        switch (element["stateOfPreviewText"]) {
            case "已繳費":
                displayOfOrderButton = "hidden"
                displayOfOrderEditButton = "hidden"
                stateOfPreviewTextColor = "#97D581"
                displayOfOrderInformation = "block"
                displayOfSelectBlock = "hidden"
                break;
            case "未繳費":
                displayOfOrderButton = "hidden"
                displayOfOrderEditButton = "block"
                stateOfPreviewTextColor = "#E2473D"
                displayOfOrderInformation = "hidden"
                displayOfSelectBlock = "block"
                opacityOfButton="opacity-50"
                cursorOfButton="cursor-default"
                break;
            case "未訂餐":
                displayOfOrderButton = "block"
                displayOfOrderEditButton = "hidden"
                stateOfPreviewTextColor = "#9C9C9C"
                displayOfOrderInformation = "hidden"
                displayOfSelectBlock = "block"
                opacityOfButton="opacity-100"
                cursorOfButton="cursor-pointer"
                break;
            default:
                break;
        }

        value["item"][index]["css"] = {
            "displayOfOrderButton": displayOfOrderButton,  //hidden or block
            "displayOfOrderEditButton": displayOfOrderEditButton,  //hidden or block
            "stateOfPreviewTextColor": stateOfPreviewTextColor, //#97D581-綠(已繳費) #E2473D-紅(未繳費) #9C9C9C-灰(未訂餐)
            "displayOfOrderInformation": displayOfOrderInformation, //hidden or block
            "displayOfSelectBlock": displayOfSelectBlock,
            "opacityOfButton":opacityOfButton,
            "cursorOfButton":cursorOfButton
        };
    });
    return returnData;
}


function Manage() {
    const [data, setData] = useState(null);
    const [HTML, setHTML] = useState(<div>Loding...</div>); //到時候useState()裡放loading HTML
    // Use effect 在 component 被 mount 的時候會執行喔
    useEffect(() => {
        console.log("Manage.jsx useEffect executed!");
        fetchManageData().then(value => {
            originData = value
            console.log(originData);
            setData(creatData(value))
        });
    }, []);

    useEffect(() => {
        if(data != null) {
            setHTML(
                <div className="w-full h-full overflow-scroll pb-16 px-[1.8rem] pt-[2.5rem] flex flex-col">
                    <div className="text-black text-[1.8rem] font-[700]">訂餐管理</div>
                    <div className="flex flex-row justify-between my-[0.8rem]">
                        <div className="text-black text-[1.2rem] font-[700]">已繳: {data["headerPreviews"]["paid"]}元</div>
                        <div className="text-black text-[1.2rem] font-[700]">未繳: {data["headerPreviews"]["unpaid"]}元</div>
                        <div className="text-black text-[1.2rem] font-[700]">未訂: {data["headerPreviews"]["NotOrderedDays"]}天</div>
                    </div>
                    <div>
                        <div className="h-[2rem] w-full bg-[#D0CFCF] rounded-[1.15rem]"></div>
                        <div className="text-[#565656] text-[0.8rem] font-[400] flex flex-row justify-between my-[0.5rem]">
                            <div>8/29</div>
                            <div>8/30</div>
                        </div>
                        <div className="flex flex-row justify-start gap-[1.3rem] my-[1.25rem]">
                            <div className="flex flex-row items-center">
                                <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#97D581] mr-[0.3rem]"></div>
                                <div className="text-[#565656] text-[0.8rem] font-[400]">已繳費</div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#E2473D] mr-[0.3rem]"></div>
                                <div className="text-[#565656] text-[0.8rem] font-[400]">未繳費</div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-[#D0CFCF] mr-[0.3rem]"></div>
                                <div className="text-[#565656] text-[0.8rem] font-[400]">未訂餐</div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-[1px] bg-[#B6B6B6]"></div>
                    <div className=" flex flex-col items-center w-full">
                        <Items itemsData={data["item"]}/>
                    </div>
                </div>
            );
        }
    }, [data]); // 這邊上次寫錯了

    return HTML;
}

function Items({itemsData}){
    const [newItemData, setNewItemData] = useState(firstSetNewItemData())
    function firstSetNewItemData(){
        let o = [...itemsData]
        o.forEach((element, index)=>{
            switch(element["stateOfPreviewText"]){
                case "已繳費"||"未繳費":
                    o[index]["cost"] = getCost(element["lunchBox"])
                    break;
                case "未訂餐":
                    o[index]["cost"] = getCost(element["lunchBox"])//getCost("自備餐盒")
                    break;
                default:
                    break;
            }
        })
        return o
    }

    let handleSelectChange = (event, index, value) => {
        let o = [...newItemData]
        if(value=="box"){
            o[index]["lunchBox"]= event.target.value
            o[index]["cost"]= getCost(event.target.value)
        }else if(value=="num"){
            o[index]["mealNumber"]= event.target.value
        }
        setNewItemData(o)
        console.log(o);
        console.log(o[index]["mealNumber"],o[index]["lunchBox"],"||",originData["item"][index]["mealNumber"],originData["item"][index]["lunchBox"]);
        if(o[index]["mealNumber"] != originData["item"][index]["mealNumber"] || o[index]["lunchBox"] != originData["item"][index]["lunchBox"]){
            console.log("not");
            o[index]["css"]["opacityOfButton"] = "opacity-100"
            o[index]["css"]["cursorOfButton"] = "cursor-pointer"
        }else if(o[index]["mealNumber"] == originData["item"][index]["mealNumber"] || o[index]["lunchBox"] == originData["item"][index]["lunchBox"]){
            console.log("yes");
            o[index]["css"]["opacityOfButton"] = "opacity-50"
            o[index]["css"]["cursorOfButton"] = "cursor-default"
        }
    };

    let handleButtonClick = (event, index) => {
        console.log(selectedValue); //取得使用者所更改選取的index與更改的value
    };

    return newItemData.map((element, index) => {
        return (
            <div className=" flex flex-col w-full my-[0.75rem]" key={index}>
                <div className=" flex flex-row justify-between">
                    <div className=" text-black text-[1.5rem] font-[700]">{element["date"]}</div>
                    <div className={`text-[${element["css"]["stateOfPreviewTextColor"]}] text-[1.5rem] font-[600]`}>{element["stateOfPreviewText"]}</div>
                </div>
                <div className={`flex flex-row justify-between items-center`}>
                    {/* 已繳費時顯示 */}
                    <div className={`text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ${element["css"]["displayOfOrderInformation"]}`}>
                        <div>餐號{element["mealNumber"]}</div>
                        <div>{element["lunchBox"]}</div>
                        <div>{element["cost"]}元</div>
                    </div>
                    {/* 未繳費、未訂餐時顯示 */}
                    <div className={`${element["css"]["displayOfSelectBlock"]} flex flex-row gap-2 mt-[2px]`}>
                        <select defaultValue={element["lunchBox"]} onChange={(event)=>{handleSelectChange(event,index,"box")}} className="py-0.5 px-1 h-fit text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
                            <option value="自備餐盒">自備餐盒</option>
                            <option value="學校餐盒">學校餐盒</option>
                        </select>
                        <select defaultValue={element["mealNumber"]} onChange={(event)=>{handleSelectChange(event,index,"num")}} className="py-0.5 px-1 text-[0.9rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
                            {element["allMealNumber"].map((element, index) => <option value={element} key={index}>{element}</option>)}
                        </select>
                        <div className="text-[#565656] text-[1rem] font-[400] flex flex-row justify-start gap-[1.5rem] ml-1">{element["cost"]}元</div>
                    </div>
                    <button className={`text-[#35B1E2] text-[1rem] font-[600] ${element["css"]["displayOfOrderButton"]} ${element["css"]["opacityOfButton"]} ${element["css"]["cursorOfButton"]}`}>預定</button>
                    <button onClick={(event) => {handleButtonClick(event, index)}} className={`${element["css"]["displayOfOrderEditButton"]} ${element["css"]["opacityOfButton"]} ${element["css"]["cursorOfButton"]}`}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M2.84375 19.25C2.84375 18.8876 3.13757 18.5938 3.5 18.5938H17.5C17.8624 18.5938 18.1563 18.8876 18.1563 19.25C18.1563 19.6124 17.8624 19.9062 17.5 19.9062H3.5C3.13757 19.9062 2.84375 19.6124 2.84375 19.25Z" fill="#323232"/><path opacity="0.5" d="M16.6956 6.45017C17.7708 5.37494 17.7708 3.63165 16.6956 2.55642C15.6204 1.48119 13.8771 1.48119 12.8019 2.55642L12.1808 3.17749C12.1893 3.20317 12.1981 3.22921 12.2073 3.25558C12.4349 3.91172 12.8644 4.77187 13.6724 5.57986C14.4804 6.38784 15.3405 6.81735 15.9967 7.04499C16.0229 7.0541 16.0488 7.06289 16.0744 7.07136L16.6956 6.45017Z" fill="#323232"/><path d="M12.2072 3.14966L12.1804 3.1764C12.189 3.20208 12.1978 3.22812 12.2069 3.25449C12.4346 3.91064 12.8641 4.77078 13.672 5.57877C14.4801 6.38675 15.3402 6.81627 15.9964 7.04391C16.0224 7.05294 16.0481 7.06165 16.0734 7.07004L10.0798 13.0637C9.67575 13.4677 9.47362 13.6699 9.25084 13.8436C8.98808 14.0486 8.70372 14.2243 8.40285 14.3677C8.14779 14.4892 7.87671 14.5796 7.33455 14.7604L4.4756 15.7133C4.20879 15.8022 3.91464 15.7328 3.71578 15.534C3.51692 15.3351 3.44748 15.041 3.53641 14.7741L4.48939 11.9151C4.67012 11.373 4.76048 11.1019 4.88203 10.8468C5.02542 10.546 5.20115 10.2616 5.40613 9.99888C5.57989 9.77611 5.78194 9.57407 6.18599 9.17L12.2072 3.14966Z" fill="#323232"/></svg></button>
                </div>
            </div>
        );
    });
}

export default Manage;
