import React,{useState} from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import "./layoutadmin.scss"
import { MenuTop } from '../components/admin/MenuTop';
import { Sidebar } from '../components/admin/Sidebar';
export const LayoutAdmin = () => {

    const {Header,Content,Footer,Sider} = Layout


    const [menuIsOpen, setmenuIsOpen] = useState(true)
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
