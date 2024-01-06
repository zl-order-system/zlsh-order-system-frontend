import Information from "./information.json"
import fakeInfo from "./fakeInfo.json"

const flaskOpen = false
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
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["manage_GET"])
    const url = URL.managePage
    const method = "GET"
    const getData = (method, url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open(method, url, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Request was successful, handle the response
                        resolve(xhr.responseText);
                    } else {
                        // There was an error with the request
                        reject(new Error(xhr.Error));
                    }
                }
            };
            // Send the XML data in the request body
            xhr.send();
        })
    }
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
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["manage_POST"])
    const url = URL.managePage
    const postOrderData = (data, method, url) => {
        return new Promise((resolve, reject) => {
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
