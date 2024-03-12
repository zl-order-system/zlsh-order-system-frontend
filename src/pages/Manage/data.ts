import { OrderState } from "../../util/types/types";
import { GetOrderDataRes } from "../../API/schema/manage"

const data: GetOrderDataRes = {
    "headerData": {
        "paid": 0,
        "owed": 0,
        "daysUnordered": 5
    },
    "bodyData": [
        {
            "state": OrderState.UNORDERED,
            "date": [
                2024,
                2,
                23
            ],
            "displayDate": "2/23 週五",
            "id": null,
            "lunchBox": null,
            "price": null,
            "selectedMeal": null,
            "mealOptions": [
                {
                    "name": "微辣高麗肉片",
                    "schoolOnly": true
                },
                {
                    "name": "紅燒豬排",
                    "schoolOnly": false
                },
                {
                    "name": "三杯雞丁",
                    "schoolOnly": true
                },
                {
                    "name": "肉燥乾麵",
                    "schoolOnly": false
                },
                {
                    "name": "椒鹽柳葉魚",
                    "schoolOnly": false
                }
            ],
            "locked": false
        },
        {
            "state": OrderState.UNORDERED,
            "date": [
                2024,
                2,
                26
            ],
            "displayDate": "2/26 週一",
            "id": null,
            "lunchBox": null,
            "price": null,
            "selectedMeal": null,
            "mealOptions": [
                {
                    "name": "滷無骨腿排",
                    "schoolOnly": false
                },
                {
                    "name": "咔啦茄汁蛋包飯",
                    "schoolOnly": false
                },
                {
                    "name": "醬爆肉片",
                    "schoolOnly": false
                },
                {
                    "name": "蠔油蒸魚片",
                    "schoolOnly": false
                }
            ],
            "locked": false
        },
        {
            "state": OrderState.UNORDERED,
            "date": [
                2024,
                2,
                27
            ],
            "displayDate": "2/27 週二",
            "id": null,
            "lunchBox": null,
            "price": null,
            "selectedMeal": null,
            "mealOptions": [
                {
                    "name": "滷無骨腿排",
                    "schoolOnly": false
                },
                {
                    "name": "咔啦茄汁蛋包飯",
                    "schoolOnly": false
                },
                {
                    "name": "醬爆肉片",
                    "schoolOnly": false
                },
                {
                    "name": "蠔油蒸魚片",
                    "schoolOnly": false
                }
            ],
            "locked": false
        },
        {
            "state":  OrderState.UNORDERED,
            "date": [
                2024,
                2,
                29
            ],
            "displayDate": "2/29 週四",
            "id": null,
            "lunchBox": null,
            "price": null,
            "selectedMeal": null,
            "mealOptions": [
                {
                    "name": "滷無骨腿排",
                    "schoolOnly": false
                },
                {
                    "name": "咔啦茄汁蛋包飯",
                    "schoolOnly": false
                },
                {
                    "name": "醬爆肉片",
                    "schoolOnly": false
                },
                {
                    "name": "蠔油蒸魚片",
                    "schoolOnly": false
                }
            ],
            "locked": false
        },
        {
            "state":  OrderState.UNORDERED,
            "date": [
                2024,
                3,
                1
            ],
            "displayDate": "3/1 週五",
            "id": null,
            "lunchBox": null,
            "price": null,
            "selectedMeal": null,
            "mealOptions": [
                {
                    "name": "滷無骨腿排",
                    "schoolOnly": false
                },
                {
                    "name": "咔啦茄汁蛋包飯",
                    "schoolOnly": false
                },
                {
                    "name": "醬爆肉片",
                    "schoolOnly": false
                },
                {
                    "name": "蠔油蒸魚片",
                    "schoolOnly": false
                }
            ],
            "locked": false
        }
    ]
}
export default data;
