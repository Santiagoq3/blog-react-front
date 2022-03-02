
export const path = "http://localhost:8080";




// users

export const signUpApi = (data)=>{

    const url = `${path}/users/signup`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }



   return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=>console.log(err))


}


export const signInApi = (data)=>{
    const url =  `${path}/users/signin`;

   const params ={
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }

   return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> console.log(err))

}

export const getUsersApi = (token)=>{

    const url = `${path}/users/users`;


    const params = {
        headers:{
            "Content-Type": "application/json",
            xtoken: token
        }
    }

   return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> console.log(err))

}
export const getActiveUsersApi = (token,status)=>{

    const url = `${path}/users/users-active?active=${status}`;


    const params = {
        headers:{
            "Content-Type": "application/json",
            xtoken: token
        }
    }

   return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> console.log(err))

}


export const updateUserApi = (token,user,userID)=>{

    const url = `${path}/users/users/${userID}`


    const params = {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            xtoken: token
        }
    }

    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> console.log(err))

    

}

export const activateUserApi = (token,status,userID) =>{

    const url = `${path}/users/users/activate-user/${userID}`;

    const params = {
        method: "PUT",
        body: JSON.stringify({active: status}),
        headers:{
            "Content-Type": "application/json",
            xtoken: token
        }
        
    }

    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)
}