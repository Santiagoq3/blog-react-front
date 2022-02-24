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

export const logout = ()=>{
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
}


export const refreshAccessToken = (refreshToken)=>{
    const url = `${path}/auth/refresh-token`;

    const bodyObj = {
        refreshToken
    }

    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers:{
            "Content-Type": "application/json"
        }
    };

    fetch(url,params)
    .then((res)=> res.json())
    .then((data)=>{

        if(data){
            const {accessToken,refreshToken} = data;

            localStorage.setItem(ACCESS_TOKEN,accessToken)
            localStorage.setItem(REFRESH_TOKEN,refreshToken);
            
        }else{
            logout();
        }
    })
    .catch((err)=>console.log(err))
}