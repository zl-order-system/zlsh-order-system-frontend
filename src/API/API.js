import Information from "./information.json"
import fakeInfo from "./fakeInfo.json"
import fakeMealsData from "./fakeMealsData.json"

const flaskOpen = true
const domain = "http://localhost:5000"
const URL = {
    homePage :  domain + "/home",
    managePage : domain + "/manage",
    accountPage : domain + "/account",
    mealsPage : "https://zl-order-system.github.io/zlsh-order-system-crawl/API/meals/latest.json"
}

async function doRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject({ status: xhr.status, statusText: xhr.statusText, testMode : flaskOpen });
                }
            }
        }
        xhr.send(data)
    })
}

export async function getHomeData(){
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["account_GET"])
    const url = URL.homePage
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getManageData() {
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["manage_GET"])
    const url = URL.managePage
    let method = "GET"
    return doRequest(method, url, null)
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
    return doRequest(method, url, data)
}

export async function getAccount(){
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["manage_POST"])
    const url = URL.accountPage
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getMealsData(){
    if ( !flaskOpen ) return JSON.stringify(fakeMealsData)
    const url = URL.mealsPage
    let method = "GET"
    return doRequest(method, url, null)
}