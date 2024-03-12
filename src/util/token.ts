const tokenKey = "token"

export const getToken = () => localStorage.getItem(tokenKey)
export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const clearToken = () => localStorage.removeItem(tokenKey)

// 這邊命名需要改，不然就是把side effect拿掉
export function loginCheck() {
  if(getToken() === null)
    window.location.href = '#/login'
}
export function logout() {
  localStorage.removeItem("token")
  window.location.href = '#/login'
}
