const tokenKey = "token"

export const setToken = token => localStorage.setItem(tokenKey, token)
export const getToken = () => localStorage.getItem(tokenKey)
export function loginCheck(){
    //setToken("test")
    // localStorage.removeItem("token")
    if(getToken() == null){
        window.location.href = '#/login'
    }
}
export function logout(){
    localStorage.removeItem("token")
    window.location.href = '#/login'
}