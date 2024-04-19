export function getAppConstants() {
  let MODE = process.env.MODE
  console.log(MODE)
    if (MODE === undefined || MODE === "staging")
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/staging/app",
          BACKEND_HOST: "staging.order-system.octoberserver.net",
          MANAGEMENT_URL: "https://zl-order-system.github.io/staging/management/#/"
        }
    else
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/app",
          BACKEND_HOST: "order-system.octoberserver.net",
          MANAGEMENT_URL: "https://zl-order-system.github.io/management/#/"
        }
}
