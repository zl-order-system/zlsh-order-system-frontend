export default () => {
    let mode = "staging"
    if ( mode === "staging" )
        return {
            "home" : "https://staging.order-system.octoberserver.net/api/user/home",
            "meals" : "https://raw.githubusercontent.com/zl-order-system/zlsh-order-system-crawl/main/API/meals/latest.json",
            "manage" : "https://staging.order-system.octoberserver.net/api/order",
            "account" : "https://staging.order-system.octoberserver.net/api/user/account"
        }
    else 
        return {
            "home" : "",
            "meals" : "https://raw.githubusercontent.com/zl-order-system/zlsh-order-system-crawl/main/API/meals/latest.json",
            "manage" : "",
            "account" : ""
        }
}