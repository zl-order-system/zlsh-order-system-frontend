import Information from "./information.json"
import fakeInfo from "./fakeInfo.json"
import fakeMealsData from "./fakeMealsData.json"
import getAppConstansts from "./appConstansts"
import { getToken, logout } from "../utils/token"

const fakeInfoMode = false

async function doRequest(method, url, data, haderJson) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.setRequestHeader('Authorization', `Bearer ${ getToken() }`);
        if(haderJson) xhr.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
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

export function doError(error, callFunction){
    switch (error.status) {
        case 400:  //資料錯誤
            callFunction("資料錯誤，請回報給開發人員:" + error.status)
            break
        case 401:
            logout()
            break;
        case 403:
            callFunction("無此權限:" + error.status)
        case 500:
            callFunction("後端錯誤，請回報給開發人員:" + error.status)
        case 503:
            callFunction("後端斷線，閘道仍在線:" + error.status)
        default:
            callFunction("發生錯誤：" + error.status)
            break;
    }
}
// 4xx - 客戶端問題
// 400 - 前端錯誤，請回報給開發人員
// 401 - 未驗證
// 403 - 已驗證但無權限
// 5xx - 伺服器端錯誤
// 500 - 後端錯誤，請回報給開發人員
// 503 - 後端斷線，閘道仍在線
// Time out - 連線逾時，請檢查網路連線

export async function getHomeData(){
    if ( fakeInfoMode ) return JSON.stringify(fakeInfo["Home_GET"])
    const url = getAppConstansts().home
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getManageData() {
    if ( fakeInfoMode ) return JSON.stringify(fakeInfo["manage_GET"])
    const url = getAppConstansts().manage
    let method = "GET"
    return doRequest(method, url, null, true)
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
    if ( fakeInfoMode ) return JSON.stringify(fakeInfo["manage_POST"])
    console.log(data);
    const url = getAppConstansts().manage
    return doRequest(method, url, data, true)
}

export async function getAccount(){
    if ( fakeInfoMode ) return JSON.stringify(fakeInfo["account_GET"])
    const url = getAppConstansts().account
    let method = "GET"
    return doRequest(method, url, null)
}

export async function getMealsData(){
    if ( fakeInfoMode ) return JSON.stringify(fakeMealsData)
    const url = getAppConstansts().meals
    let method = "GET"
    return doRequest(method, url, null)
}