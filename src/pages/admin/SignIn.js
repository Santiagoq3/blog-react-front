import React from 'react'
import "./signin.scss"

import { Layout, Tabs } from 'antd';
import { Register } from '../../components/admin/Register';



export const SignIn = () => {

  const {Content} = Layout;
  const {TabPane} = Tabs

  return (
    <Layout className='sign-in'>
      <Content className='sign-in__content'>  
        <h1 className='sign-in__content-logo'>
          Blog
        </h1>
        <div className='sign-in__content-tabs'>
          <Tabs type='card'>
              <TabPane tab={<span>Entrar</span>} key="1">
                Componente de LoginForm
              </TabPane>
              <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                <Register />
              </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  )
}
