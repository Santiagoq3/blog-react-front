import jwtDecode from "jwt-decode";
import React,{useState,useEffect,useContext, createContext} from "react";
import { getAccessToken, getRefreshToken,refreshAccessToken,logout } from "../api/auth";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [user, setuser] = useState({
        user: null,
        isLoading: true
    })

    useEffect(()=>{
        checkUserLogin(setuser)
    },[])

  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}


const checkUserLogin = (setuser)=>{
    const accessToken = getAccessToken();

    if(!accessToken){
        const refreshToken = getRefreshToken();

        if(!refreshToken){
            logout();
            setuser({
                user:null,
                isLoading: false
            })
        }else{
            refreshAccessToken(refreshToken);
        }
    }else{
        setuser({
            user: jwtDecode(accessToken),
            isLoading: false
        })
    }
}
