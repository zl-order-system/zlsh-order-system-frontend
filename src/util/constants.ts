export const AppConstants = {
  MAIN_APP_URL: "https://zl-order-system.github.io/staging/app",
  BACKEND_HOST: "staging.order-system.octoberserver.net"
}

export function getAppConstants() {
  let MODE = process.env.MODE
    if (MODE === undefined || MODE === "staging")
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/staging/app",
          BACKEND_HOST: "staging.order-system.octoberserver.net"
        }
    else
        return {
          MAIN_APP_URL: "https://zl-order-system.github.io/app",
          BACKEND_HOST: "order-system.octoberserver.net"
        }
}