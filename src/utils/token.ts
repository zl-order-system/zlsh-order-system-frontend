const tokenKey = "token"

export const setToken = ( token: string ) => localStorage.setItem(tokenKey, token)
export const getToken = () => localStorage.getItem(tokenKey)
export function loginCheck(){
    if(getToken() == null){
        window.location.href = '#/login'
    }
}
export function logout(){
    localStorage.removeItem("token")
    window.location.href = '#/login'
}