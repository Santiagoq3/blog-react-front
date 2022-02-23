import React,{Fragment, useEffect, useState} from 'react'
import { Layout } from 'antd';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import "./layoutadmin.scss"
import { MenuTop } from '../components/admin/MenuTop';
import { Sidebar } from '../components/admin/Sidebar';
import { SignIn } from '../pages/admin/SignIn';
import { getAccessToken, getRefreshToken } from '../api/auth';

export const LayoutAdmin = () => {

    const {Header,Content,Footer,Sider} = Layout
    const [menuIsOpen, setmenuIsOpen] = useState(true)

    const navigate = useNavigate()

    const user = null


    useEffect(()=>{
        
        if(!user){
                
           navigate("/login")
                
        }
    },[])
    
    console.log(getAccessToken())
    console.log(getRefreshToken());

  return (
    <Layout>
        <Sidebar menuCollapsed={menuIsOpen} />
        <Layout className='layout-admin' style={{marginLeft: menuIsOpen  ? "80px" : "200px"}}>
            <Header className='layout-admin__header'>
                <MenuTop setmenuIsOpen={setmenuIsOpen} menuIsOpen={menuIsOpen}/>
            </Header>
            <Content className='layout-admin__content'>
                <Outlet />
            </Content>
            <Footer className='layout-admin__footer'>
                este es mi footer admin
            </Footer>
        </Layout>
    </Layout>
  )
}
