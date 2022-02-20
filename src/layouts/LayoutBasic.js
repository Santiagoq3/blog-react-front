import React from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';


export const LayoutBasic = () => {
    const {Header,Content,Footer,Sider} = Layout
  return (
    <Layout>
        <h1>LayoutBasic</h1>
        <Layout>
            <Content>

                <Outlet />

            </Content>
            <Footer>
                Esto es un footer
            </Footer>

        </Layout>
    </Layout>
  )
}
