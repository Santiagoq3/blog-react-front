import React, { useCallback, useEffect, useState } from 'react'

import "./edituserform.scss"
import {Avatar,Form,Input,Select,Row,Col,Button,notification} from "antd";

import {useDropzone} from "react-dropzone"
import { updateUserApi } from '../../api/config';
import { getAccessToken } from '../../api/auth';


export const EditUserForm = ({user}) => {



    const [avatar, setAvatar] = useState(null)
    const [userData, setuserData] = useState({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
    })

    useEffect(()=>{
        
    },[])
    const updateUser = async(e)=>{

        e.preventDefault()
        const token = getAccessToken();

        const userUpdate = userData;

        if(userUpdate.password || userUpdate.repeatpassword){

            if(userUpdate.password !== userUpdate.repeatpassword){
                notification["error"]({
                    message: "Las contraseña deben ser iguales"
                })
                return;
            }else{
                delete userUpdate.repeatpassword
                console.log(userUpdate);
            }
        }

        if(!userUpdate.name || !userUpdate.lastname || !userUpdate.email){
            notification["error"]({
                message: "El nombre, apellido y email son obligatorios"
            })

            return;
        }

        let result = await updateUserApi(token,userUpdate,user._id);

        if(result.ok){
            notification["success"]({
                message:`${result.msg}`
            })
        }else{
            notification["error"]({
                message:`${result.msg}`
            })
        }

        console.log(result);
        console.log(userData);
    }

  return (
    <div>
       
        <h2>{user.email}</h2>
        <EditForm user={user} userData={userData} setuserData={setuserData} updateUser={updateUser} />
    </div>
  )
}


const UploadAvatar = ({avatar,setAvatar})=>{

    const onDrop = useCallback(
        acceptedFiles =>{
            const file = acceptedFiles[0];
            setAvatar({file,preview: URL.createObjectURL(file)})
        }, [setAvatar]
    )

}


const EditForm = ({user,userData,setuserData,updateUser})=>{

    return(

        <Form onSubmitCapture={updateUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            placeholder='Nombre...'
                            defaultValue={userData.name}
                            onChange={e => setuserData({
                                ...userData,
                                name: e.target.value
                            })} 
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            placeholder='Apellido...'
                            defaultValue={userData.lastname}
                            onChange={e => setuserData({
                                ...userData,
                                lastname: e.target.value
                            })} 
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            placeholder='Email...'
                            defaultValue={userData.email}
                            onChange={e => setuserData({
                                ...userData,
                                email: e.target.value
                            })} 
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select 
                            placeholder='Rol...'
                            defaultValue={userData.role}
                            onChange={e => setuserData({
                                ...userData,
                                role: e
                            })} 
                        >
                            <Select.Option value="admin" >
                                Administrador
                            </Select.Option>
                            <Select.Option value="editor" >
                                Editor
                            </Select.Option>
                            <Select.Option value="revisor" >
                                Revisor
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password" 
                            placeholder='Contaseña...'
                            defaultValue={userData.password}
                            onChange={e => setuserData({
                                ...userData,
                                password: e.target.value
                            })} 
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password" 
                            placeholder='Repetir contraseña...'
                            defaultValue={userData.repeatpassword}
                            onChange={e => setuserData({
                                ...userData,
                                repeatpassword: e.target.value
                            })} 
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type='primary'htmlType='submit'>
                    Actualizar usuario
                </Button>
            </Form.Item>
        </Form>
    )
}
