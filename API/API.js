


export function fetchOredrData(){
    return [{
        "month":"8",
        "day":"30",
        "week":"星期四",
        "order":"T",
    },
    {
        "month":"9",
        "day":"1",
        "week":"星期五",
        "order":"F",
    },
    {
        "month":"9",
        "day":"4",
        "week":"星期一",
        "order":"F",
    },
    {
        "month":"9",
        "day":"5",
        "week":"星期二",
        "order":"F",
    }]
    fetch("URL").then(res=>{
      return JSON.parse(res)
    }) 
}