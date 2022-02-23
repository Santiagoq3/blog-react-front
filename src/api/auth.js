import jwtDecode from "jwt-decode"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../helpers/constants";

export const path = "http://localhost:8080";



export const getAccessToken = ()=>{
    
    const accessToken = localStorage.getItem(ACCESS_TOKEN)


    if(!accessToken || accessToken === "null"){
        return null
    }

       return willExpireToken(accessToken) ? null : accessToken

    
}
export const getRefreshToken = ()=>{
    
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)


    if(!refreshToken || refreshToken === "null"){
        return null
    }

       return willExpireToken(refreshToken) ? null : refreshToken

    
}


const willExpireToken = (token)=>{

    const seconds = 60;
    const metaToken = jwtDecode(token);
    const {exp} = metaToken;
    const now = (Date.now() + seconds) / 1000;


    return now > exp
}