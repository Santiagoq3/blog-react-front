import React, { useState } from 'react'
import "./register.scss"
import { Form, Input, Button, Checkbox,notification } from 'antd';
import {MailOutlined,LockOutlined} from '@ant-design/icons';
import { signUpApi } from '../../api/config';


export const Register = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacy: false,

    })

    const handleOnChange = (e)=>{
        if(e.target.name === "privacy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const registerLog = async(e)=>{

        e.preventDefault();
       const result = await signUpApi(inputs)
       if(result.ok){
           notification["success"]({
               message: result.msg
           })

           setInputs({
            email: "",
            password: "",
            repeatPassword: "",
            privacy: false,
    
        })
       }else{
        notification["error"]({
            message: result.msg
        })
       }
    }

  return (
    <Form className='register-form' onSubmitCapture={registerLog} onChange={handleOnChange}>
      <Form.Item>
        <Input prefix={<MailOutlined />} type="email" name='email' placeholder='Ingrese Correo...' className='register-form__input'
        value={inputs.email} />   
      </Form.Item>  
      <Form.Item>
          <Input prefix={<LockOutlined />}
            type="password" name='password' placeholder='Ingrese la contraseña' className='register-form__input'
            value={inputs.password}
          />

      </Form.Item>
      <Form.Item>
          <Input prefix={<LockOutlined />}
            type="password" name='repeatPassword' placeholder='Repetir la contraseña' className='register-form__input'
            value={inputs.repeatPassword}
          />

          
      </Form.Item>
      <Form.Item>
          <Checkbox name='privacy' checked={inputs.privacy}>
              He leido la politica de privacidad
          </Checkbox>
      </Form.Item>
      <Form.Item>
          <Button htmlType='submit' className='register-form__btn'>
              Crear Cuenta
          </Button>
      </Form.Item>
    </Form>
  )
}
