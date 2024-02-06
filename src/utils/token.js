const tokenKey = "token"

export const setToken = token => localStorage.setItem(tokenKey, token)
export const getToken = () => localStorage.getItem(tokenKey)
export function loginCheck(){
    if(getToken() == null){
        location.href = '#/login'
        location.reload()
    }
}