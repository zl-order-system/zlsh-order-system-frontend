const orderDataURL = "URL"


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

    fetch(orderDataURL).then(res=>{
      return JSON.parse(res)
    })
}
