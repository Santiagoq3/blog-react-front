import React from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import "./layoutadmin.scss"
export const LayoutAdmin = () => {

    const {Header,Content,Footer,Sider} = Layout
  return (
    <Layout>
        {/* sider */}
        <Layout className='layout-admin'>
            <Header className='layout-admin__header'>
                {/* to do */}
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
