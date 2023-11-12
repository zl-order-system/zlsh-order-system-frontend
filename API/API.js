const orderDataURL = "URL"


export async function fetchOrderData(){
        return [{
            "month":"8",
            "day":"30",
            "week":"星期四",
            "orderState":"T",
            "allMealNumber":[1,2,3],
            "orderData":{
                "number":"2",
                "way":"own",
                "money":"65"
            }
        },
        {
            "month":"9",
            "day":"1",
            "week":"星期五",
            "orderState":"F",
            "allMealNumber":[1,2,3],
            "orderData":"NULL"
        },
        {
            "month":"9",
            "day":"4",
            "week":"星期一",
            "orderState":"F",
            "allMealNumber":[1,2,3],
            "orderData":"NULL"
        },
        {
            "month":"9",
            "day":"5",
            "week":"星期二",
            "orderState":"F",
            "allMealNumber":[1,2,3],
            "orderData":"NULL"
        }]
    
    fetch(orderDataURL).then(res=>{
      return JSON.parse(res)
    }) 
}