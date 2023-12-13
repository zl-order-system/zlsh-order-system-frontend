import Information from "./information.json"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export type OrderDataItem = {
    "month": string;
    "day": string;
    "week": string;
    "orderState": string;
    "availableMeals": number[];
    "orderData": {
        "mealID": string;
        "lunchBox": string;
        "money": string;
    };
} | {
    "month": string;
    "day": string;
    "week": string;
    "orderState": string;
    "availableMeals": number[];
    "orderData": string;
}

export type FetchOrderData = OrderDataItem[] | undefined | null

export async function fetchOrderData() {
    await delay(0)
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
}

export type FetchManageData = {
    headerPreviews: {
        paid: string;
        unpaid: string;
        NotOrderedDays: string;
    };
    item: {
        date: string;
        stateOfPreviewText: string;
        mealNumber: string;
        lunchBox: string;
        cost: string;
        allMealNumber: number[];
    }[];
}

export async function fetchManageData(): Promise<FetchManageData> {
    await delay(0)
    return {
        "headerPreviews": {
            "paid": "500",
            "unpaid": "140",
            "NotOrderedDays": "3",
        },
        "item": [{
            "date": "8/29 週一",
            "stateOfPreviewText": "已繳費", //已繳費0 未繳費1 未訂餐2
            "mealNumber": "1",
            "lunchBox": "自備餐盒",
            "cost": "65",
            "allMealNumber": [1, 2, 3, 4, 5],
        },
        {
            "date": "8/30 週二",
            "stateOfPreviewText": "未繳費",
            "mealNumber": "4",
            "lunchBox": "學校餐盒",
            "cost": "70",
            "allMealNumber": [1, 2, 3, 4, 5]
        },
        {
            "date": "8/31 週三",
            "stateOfPreviewText": "未訂餐",
            "mealNumber": "-",
            "lunchBox": "-",
            "cost": "-",
            "allMealNumber": [1, 2, 3, 4, 5]
        },
        {
            "date": "9/1 週四",
            "stateOfPreviewText": "未繳費",
            "mealNumber": "1",
            "lunchBox": "學校餐盒",
            "cost": "70",
            "allMealNumber": [1, 2, 3]
        }
        ]
    }
}
export function checkOrderState(stateCode: string) { //訂餐狀態碼012轉換為中文
    switch (stateCode) {    //已繳費0 未繳費1 未訂餐2
        case "0":
            return "已繳費"
        case "1":
            return "未繳費"
        case "2":
            return "未訂餐"
        default:
            return "error"
    }
}
export function getCost(lunchBox: string) { //取得餐盒對應的錢
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
export function postOrder(postData: string) {    //修改或新增訂單

}
