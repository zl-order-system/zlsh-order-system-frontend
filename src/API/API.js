import Information from "./information.json"
import fakeInfo from "./fakeInfo.json"
import fakeMealsData from "./fakeMealsData.json"
import getAppConstansts from "./appConstansts"
import { getToken } from "../utils/token"

const fakeInfoMode = false

async function doRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.setRequestHeader('Authorization', `Bearer ${ getToken() }`);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject({ status: xhr.status, statusText: xhr.statusText, testMode : fakeInfoMode });
                }
            }
        }
        xhr.send(data)
    })
}

export async function getHomeData(){
    if ( fakeInfoMode ) return JSON.stringify(fakeInfo["Home_GET"])
    const url = getAppConstansts().home
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getManageData() {
    if ( !fakeInfoMode ) return JSON.stringify(fakeInfo["manage_GET"])
    const url = getAppConstansts().manage
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
    if ( !fakeInfoMode ) return JSON.stringify(fakeInfo["manage_POST"])
    const url = getAppConstansts().manage
    return doRequest(method, url, data)
}

export async function getAccount(){
    if ( !fakeInfoMode ) return JSON.stringify(fakeInfo["account_GET"])
    const url = getAppConstansts().account
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getMealsData(){
    if ( !fakeInfoMode ) return JSON.stringify(fakeMealsData)
    const url = getAppConstansts().meals
    let method = "GET"
    return doRequest(method, url, null)
}