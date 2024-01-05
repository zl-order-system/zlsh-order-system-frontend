import Information from "./information.json"
const URL = {
    orderPage : "URL",
    managePage : "http://127.0.0.1:5000/manage"
}


export async function fetchOrderData() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay()
    return [{
        "month": "8",
        "day": "30",
        "week": "星期四",
        "orderState": "T",
        "availableMeals": [1, 2, 3],
        "orderData": {
            "mealID": "2",
            "lunchBox": "own",
            "money": "65"
        }
    },
    {
        "month": "9",
        "day": "1",
        "week": "星期五",
        "orderState": "F",
        "availableMeals": [1, 2, 3],
        "orderData": "NULL"
    },
    {
        "month": "9",
        "day": "4",
        "week": "星期一",
        "orderState": "F",
        "availableMeals": [1, 2, 3],
        "orderData": "NULL"
    },
    {
        "month": "9",
        "day": "5",
        "week": "星期二",
        "orderState": "F",
        "availableMeals": [1, 2, 3],
        "orderData": "NULL"
    },
    {
        "month": "9",
        "day": "6",
        "week": "星期三",
        "orderState": "F",
        "availableMeals": [1, 2, 3],
        "orderData": {
            "mealID": "1",
            "lunchBox": "school",
            "money": "70"
        }
    }]

    let result
    await fetch(orderDataURL).then(res => {
        result = JSON.parse(res)
    })
    return result
}

export async function getManageData() {
    const url = URL.managePage
    const method = "GET"
    const getData = (method, url) => {
        return new Promise((resolve, reject) => {
            console.log("api recive get info")
            // resolve(data)
            let xhr = new XMLHttpRequest()
            xhr.open(method, url, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Request was successful, handle the response
                        resolve(xhr.responseText);
                    } else {
                        // There was an error with the request
                        reject(fakeData);
                    }
                }
            };
            // Send the XML data in the request body
            xhr.send();
        })
    }
    const fakeData = JSON.stringify({
        "headerData": {
            "paid": "65", //paid
            "owed": "195", //unpaid
            "daysUnordered": "1" //NotOrderedDays
        },
        "bodyData": [{
            "state": "已繳費",
            "date": "Date",
            "displayDate": "8/29 週一", //date
            "id": "1", //mealNumber
            "lunchBox": "自備餐盒", //lunchBox
            "price": "65", //cost
            "selectedMeal": "小王子", //mealName
            "mealOptions": ["小王子", "味噌湯麵", "鍋貼＋飲料"] //allMealNumber

        },
        {
            "state": "未繳費",
            "date": "Date",
            "displayDate": "8/30 週二", //date
            "id": "2", //mealNumber
            "lunchBox": "自備餐盒", //lunchBox
            "price": "65", //cost
            "selectedMeal": "味噌湯麵", //mealName
            "mealOptions": ["小王子", "味噌湯麵", "鍋貼＋飲料"] //allMealNumber

        },
        {
            "state": "未訂餐",
            "date": "Date",
            "displayDate": "8/31 週三", //date
            "id": "-", //mealNumber
            "lunchBox": "-", //lunchBox
            "price": "-", //cost
            "selectedMeal": "-", //mealName
            "mealOptions": ["小王子", "味噌湯麵", "鍋貼＋飲料"] //allMealNumber

        },
        {
            "state": "未繳費",
            "date": "Date",
            "displayDate": "9/1 週四", //date
            "id": "2", //mealNumber
            "lunchBox": "學校餐盒", //lunchBox
            "price": "70", //cost
            "selectedMeal": "咖哩燴飯", //mealName
            "mealOptions": ["小王子", "味噌湯麵", "鍋貼＋飲料", "咖哩燴飯"] //allMealNumber

        },
        {
            "state": "未繳費",
            "date": "Date",
            "displayDate": "9/2 週五", //date
            "id": "2", //mealNumber
            "lunchBox": "自備餐盒", //lunchBox
            "price": "65", //cost
            "selectedMeal": "紅燒肉蒸蛋蓋飯", //mealName
            "mealOptions": ["小王子", "味噌湯麵", "鍋貼＋飲料", "紅燒肉蒸蛋蓋飯"] //allMealNumber

        }]
    })
    return await getData(method, url)
}
export function getCost(lunchBox){ //取得餐盒對應的錢
    let info = Information
    switch (lunchBox) {
        case "自備餐盒":
            return info["mealCost"]["自備餐盒"]
        case "學校餐盒":
            return info["mealCost"]["學校餐盒"]
        case "-":
            return info["mealCost"]["自備餐盒"]
        default:
            break;
    }
}
export async function postOrder(data, method){    //修改或新增訂單
    const url = URL.managePage
    const postOrderData = (data, method, url) => {
        return new Promise((resolve, reject) => {
            console.log("api recive order info")
            // resolve(data)
            let xhr = new XMLHttpRequest()
            xhr.open(method, url, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Request was successful, handle the response
                        resolve(xhr.responseText);
                    } else {
                        // There was an error with the request
                        reject(true);
                    }
                }
            };
            // Send the XML data in the request body
            xhr.send(data);
        })
    }
    return await postOrderData(data, method, url)
}
