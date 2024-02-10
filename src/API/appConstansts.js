export default () => {
    let MODE = process.env.MODE
    if ( MODE === undefined )
        return {
            "home" : "https://staging.order-system.octoberserver.net/api/user/home",
            "meals" : "https://zl-order-system.github.io/zlsh-order-system-crawl/API/meals/latest.json",
            "manage" : "https://staging.order-system.octoberserver.net/api/order",
            "account" : "https://staging.order-system.octoberserver.net/api/user/account"
        }
    else
        return {
            "home" : "https://" + process.env.API_HOME_URL,
            "meals" : process.env.API_MEALS_URL,
            "manage" : "https://" + process.env.API_MANAGE_URL,
            "account" : "https://" + process.env.API_ACCOUNT_URL
        }
    
}