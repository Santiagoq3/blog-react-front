import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../../api/auth';
import { getActiveUsersApi } from '../../api/config';
import { ListUser } from '../../components/admin/ListUser';
import "./user.scss"

export const User = () => {


  const [usersActive, setUsersActive]     = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);

  const token = getAccessToken();

  useEffect(()=>{

    getActiveUsersApi(token,true)
    .then((res)=> setUsersActive(res.users))
    .catch((err)=> console.log(err));

    getActiveUsersApi(token,false)
    .then((res)=> setUsersInactive(res.users))
    .catch((err)=> console.log(err));


  },[])
  
  
  return (
    <div className='user'>
        <ListUser usersActive={usersActive} usersInactive={usersInactive}  />
    </div>
  )
}
