export function getAppConstants() {
  let MODE = process.env.MODE
  console.log(MODE)
    if (MODE === undefined || MODE === "staging")
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/staging/app",
          BACKEND_HOST: "staging.order-system.octsrv.org",
          MANAGEMENT_URL: "https://zl-order-system.github.io/staging/management/#/"
        }
    else
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/app",
          BACKEND_HOST: "order-system.octsrv.org",
          MANAGEMENT_URL: "https://zl-order-system.github.io/management/#/"
        }
}
