import { fetchOrderData } from "../API/API.js";
import { useEffect, useState } from "react";


function Order(){
    const [orderData, setOrderData] = useState(null) //取得使用者訂餐資料
    useEffect(()=>{
        fetchOrderData().then((value)=> {
            setOrderData(value);
        });
    }, []);

    return (
        <div className="px-[1rem] py-[3rem] flex flex-col justify-start gap-[0.7rem] pb-16">
            <div className="flex flex-row justify-between items-center">
                <div className="text-[1.8rem] text-black font-bold">預定</div>
                <a href="https://www.zlsh.tp.edu.tw/category/office/div_300/section_lunch/lunch1_list/"><div className="text-[1.2rem] text-[#00AEB9] underline font-[400]">查看菜單</div></a>
            </div>
            <div className="border-[1px] border-[#ACACAC] rounded-[1.3rem] bg-[white] shadow-[0px_4px_8px_0px_rgba(90,90,90,0.25)] py-[1.3rem] px-[1.9rem]">
                <Items orderData={orderData} />
            </div>
            <div>

            </div>
        </div>
    );
}

function Items({orderData}){
    if (orderData == null) return null;

    let items = []
    orderData.map((item, index) => {
        // Insert item
        items.push(<Item item={item} index={index} total={orderData.length}/>);
        // Insert divider if the current item is not the last item
        if(index != orderData.length - 1){
            items.push(<div className="my-2 mx-[0.3rem] bg-[#B6B6B6] h-[1px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"></div>);
        }
    });

    return items;
}

function Item({item, index, total}){
    const [itemClass, setItemClass] = useState(()=>{
        return creatItemClass(total, 0);
    });

    // assign button text based on orderState
    let buttonText = (() => {
        switch (item["orderState"]) {
            case "T":
                return <span className="text-[1.625rem] text-[#9C9C9C] font-[600]">已預定</span>;
            case "F":
                return <span className="text-[1.625rem] text-[#00C0CC] font-[600]">預定</span>;
            default:
                return <span className="text-[1.625rem] text-[#E2473D] font-[600]">錯誤</span>;
        }
    })();

    // assign price based on orderState
    let price;
    if (item["orderState"]=="T") {
        price = (() => {
            switch (item["orderData"]["lunchBox"]) {
                case "own":
                    return "65";
                case "school":
                    return "70";
                default:
                    return "錯誤";
            }
        })();
    } else {
        price = "--";
    }

    return (
        <div className={`mb-[1.3rem] h-[${itemClass[index]["height"]}] overflow-hidden`} key={index}>
            <div className="flex flex-row justify-between items-center" key={index}>
                <div className="text-[1.7rem] text-[black] font-[700]">{item['month']}月 {item['day']}日</div>
                <button className={`rotate-${itemClass[index]["rotate"]}`}>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none"><path d="M10.3595 30.9221C10.5416 31.1056 10.7582 31.2513 10.9968 31.3507C11.2355 31.4502 11.4914 31.5013 11.75 31.5013C12.0085 31.5013 12.2645 31.4502 12.5031 31.3507C12.7417 31.2513 12.9583 31.1056 13.1404 30.9221L22.1095 21.9529C22.2916 21.7694 22.5082 21.6237 22.7468 21.5242C22.9855 21.4248 23.2414 21.3736 23.5 21.3736C23.7585 21.3736 24.0144 21.4248 24.2531 21.5242C24.4917 21.6237 24.7083 21.7694 24.8904 21.9529L33.8595 30.9221C34.0416 31.1056 34.2582 31.2513 34.4968 31.3507C34.7355 31.4502 34.9914 31.5013 35.25 31.5013C35.5085 31.5013 35.7644 31.4502 36.0031 31.3507C36.2417 31.2513 36.4583 31.1056 36.6404 30.9221C37.0051 30.5552 37.2098 30.0588 37.2098 29.5414C37.2098 29.0241 37.0051 28.5277 36.6404 28.1608L27.6516 19.1721C26.5501 18.0719 25.0568 17.4539 23.5 17.4539C21.9431 17.4539 20.4499 18.0719 19.3483 19.1721L10.3595 28.1608C9.9948 28.5277 9.79007 29.0241 9.79007 29.5414C9.79007 30.0588 9.9948 30.5552 10.3595 30.9221Z" fill="black" /></svg></div>
                </button>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <Option item={item}/>
                    <div className="translate-y-[0.25rem] text-[1.25rem] text-[#6C6C6C] font-[400]">{price}元</div>
                </div>
                <button>{buttonText}</button>
            </div>
        </div>
    );
}

function Option({item}){
        return (
        <>
            <select defaultValue={item["orderData"]["lunchBox"]} className="py-0.5 px-1 h-fit text-[1.2rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
                <option value="own">自備餐盒</option>
                <option value="school">學校餐盒</option>
            </select>
            <select defaultValue={item["orderData"]["mealID"]} className="py-0.5 px-1 text-[1.2rem] text-[#6C6C6C] font-[300] rounded-[0.25rem] border-[1px] border-[#ACACAC] leading-[100%] bg-white">
                {item["availableMeals"].map(num => <option value={num}>{num}</option>)}
            </select>
        </>
    );
}

function creatItemClass(length, openNumber){
    let itemClass = []
    for(let i = 0; i < length; i++){
        if(i == openNumber){
            itemClass.push({
                "height":"auto",
                "rotate":"0"
            })
            continue;
        }
        itemClass.push({
            "height":"2.3rem",
            "rotate":"180"
        })
    }
    return itemClass
}

export default Order
