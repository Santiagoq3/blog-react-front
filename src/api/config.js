
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