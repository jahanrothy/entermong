import Cookies from "universal-cookie";

export const getToken = (cookieName:string) =>{
    const cookies = new Cookies();
    return cookies.get(cookieName);
}

export const setToken = (name:string, token:string) =>{
    const cookies = new Cookies();
    cookies.set( name, token, { path: '/', secure: true, sameSite:'none', maxAge: 3600 });
}

export const removeToken = (name:string) =>{
    const cookies = new Cookies();
    cookies.remove(name)
}