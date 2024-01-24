import Information from "./information.json"
import fakeInfo from "./fakeInfo.json"

const flaskOpen = true
const URL = {
    homePage : "http://127.0.0.1:5000/home",
    managePage : "http://127.0.0.1:5000/manage"
}

export async function getHomeData(){
    if ( !flaskOpen ) return JSON.stringify(fakeInfo["Home_GET"])
    const url = URL.homePage
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
                        reject({status : xhr.status, statusText : xhr.statusText, testMode : flaskOpen});
                    }
                }
            };
            // Send the XML data in the request body
            xhr.send();
        })
    }
    return await getData(method, url)
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
                        reject({status : xhr.status, statusText : xhr.statusText, testMode : flaskOpen});
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
                        reject({status : xhr.status, statusText : xhr.statusText, testMode : flaskOpen});
                    }
                }
            };
            xhr.onerror = function () {
                console.log("ww");
                return error
            }
            xhr.send(data);
        })
    }
    return await postOrderData(data, method, url)
}
