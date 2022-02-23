import React, { useState } from 'react'
import "./login.scss"


import { Form,Input,Button,notification } from 'antd';

import {UserOutlined,LockOutlined} from '@ant-design/icons';
import { signInApi } from '../../api/config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../helpers/constants';

export const Login = () => {


    const [inputs, setinputs] = useState({
        email: "",
        password: ""
    })
    
    const handleInputChange = (e)=>{
    
        setinputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }
    
    const formLogin = async(e)=>{
        e.preventDefault()
    
       const result = await signInApi(inputs)

       if(!result){
           notification["error"]({
               message: result.msg
           })
       }else{
           const {refreshToken,token} = result
            notification["success"]({
                message: result.msg
            })

            localStorage.setItem(ACCESS_TOKEN, token)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)


            window.location.href= "/admin";
            
       }
    }


  return (
    <Form className='login' onChange={handleInputChange} onSubmitCapture={formLogin}>
        <Form.Item>
            <Input 
                prefix={<UserOutlined />}
                type="email"
                name="email"
                placeholder='Ingrese el email...'
                className='login-input'
                value={inputs.email}
            />

        </Form.Item>
        <Form.Item>
            <Input 
                prefix={<LockOutlined />}
                type="password"
                name="password"
                placeholder='Ingrese la contraseña...'
                className='login-input'
                value={inputs.password}
            />

        </Form.Item>
        <Form.Item>
            <Button htmlType='submit' className='login-btn'>
                Entrar
            </Button>
        </Form.Item>
        
    </Form>
  )
}
