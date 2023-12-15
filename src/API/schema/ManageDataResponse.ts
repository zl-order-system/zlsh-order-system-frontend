import { type } from "os"
import { OrderState, lunchBoxType } from "./Enums"

type getManageDataResponse = {
    headerData: {
        paid: number,
        owed: number,
        daysUnordered: number,
    },
    bodyData: {
        state: OrderState,
        date: Date,
        displayDate: string,
        id: string | undefined,
        lunchBox: lunchBoxType | "-",
        price: "65" | "70" | "-",
        selectedMeal: string | "-",
        mealOptions: string[]
    }[]
}

type dataexample = {
    "headerData": {
        "paid": 70,
        "owed": 135,
        "daysUnordered": 2
    },
    "bodyData": [
        {
            "state": "已繳費",
            "date": "2023-12-15",
            "displayDate": "2023-12-15",
            "lunchBox": "學校餐盒",
            "price": "70",
            "selectedMeal": "0",
            "mealOptions": [
                "控肉飯",
                "滷肉飯",
                "雞肉飯",
                "小王子",
                "鍋貼＋飲料",
                "海陸雙拼蓋飯",
                "皮蛋瘦肉粥",
                "豚骨湯麵",
                "什錦炒麵",
                "紅燒肉蒸蛋蓋飯",
                ""
            ]
        },
        {
            "state": "未訂餐",
            "date": "2023-12-16",
            "displayDate": "2023-12-16",
            "lunchBox": "-",
            "price": "-",
            "selectedMeal": "-",
            "mealOptions": [
                "控肉飯",
                "滷肉飯",
                "雞肉飯"
            ]
        },
        {
            "state": "未繳費",
            "date": "2023-12-17",
            "displayDate": "2023-12-17",
            "lunchBox": "自備餐盒",
            "price": "65",
            "selectedMeal": "3",
            "mealOptions": [
                "控肉飯",
                "滷肉飯",
                "雞肉飯",
                "拉麵"
            ]
        },
        {
            "state": "未訂餐",
            "date": "2023-12-19",
            "displayDate": "2023-12-19",
            "lunchBox": "-",
            "price": "-",
            "selectedMeal": "-",
            "mealOptions": [
                "控肉飯",
                "滷肉飯",
                "雞肉飯",
                "拉麵"
            ]
        },
        {
            "state": "未繳費",
            "date": "2023-12-20",
            "displayDate": "2023-12-20",
            "lunchBox": "學校餐盒",
            "price": "70",
            "selectedMeal": "0",
            "mealOptions": [
                "控肉飯",
                "滷肉飯",
                "雞肉飯",
                "拉麵"
            ]
        }
    ]
}