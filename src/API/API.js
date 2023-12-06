const orderDataURL = "URL"
const manageDataURL = "URL"


export async function fetchOrderData(){
        return [{
            "month":"8",
            "day":"30",
            "week":"星期四",
            "orderState":"T",
            "availableMeals":[1,2,3],
            "orderData":{
                "mealID":"2",
                "lunchBox":"own",
                "money":"65"
            }
        },
        {
            "month":"9",
            "day":"1",
            "week":"星期五",
            "orderState":"F",
            "availableMeals":[1,2,3],
            "orderData":"NULL"
        },
        {
            "month":"9",
            "day":"4",
            "week":"星期一",
            "orderState":"F",
            "availableMeals":[1,2,3],
            "orderData":"NULL"
        },
        {
            "month":"9",
            "day":"5",
            "week":"星期二",
            "orderState":"F",
            "availableMeals":[1,2,3],
            "orderData":"NULL"
        },
        {
            "month":"9",
            "day":"6",
            "week":"星期三",
            "orderState":"F",
            "availableMeals":[1,2,3],
            "orderData":{
                "mealID":"1",
                "lunchBox":"school",
                "money":"70"
            }
        }]

    let result
    await fetch(orderDataURL).then(res=>{
      result = JSON.parse(res)
    })
    return result
}

export async function fetchManageData(){
    return {
        "headerPreviews": {
            "paid":"500",
            "unpaid":"140",
            "NotOrderedDays":"3",
        },
        "barChart": {},
        "item": [{
            "date":"8/29 週一",
            "stateOfPreviewText":"已繳費",
            "mealNumber":"1",
            "lunchBox":"自備餐盒",
            "cost":"65",
        },
        {
            "date":"8/30 週二",
            "stateOfPreviewText":"未繳費",
            "mealNumber":"4",
            "lunchBox":"學校餐盒",
            "cost":"70",
        },
        {
            "date":"8/31 週三",
            "stateOfPreviewText":"未訂餐",
            "mealNumber":"-",
            "lunchBox":"-",
            "cost":"-",
        }]
    }

    let result
    await fetch(manageDataURL).then(res=>{
      result = JSON.parse(res)
    })
    return result
}
