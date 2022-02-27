
import React from 'react'
import { Link } from 'react-router-dom';
import { Layout,Menu } from 'antd';

import "./sidebar.scss"

export const Sidebar = ({menuCollapsed}) => {

    const {Sider} = Layout
  return (
    <Sider className='admin-sider' collapsed={menuCollapsed}>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]} >
            <Menu.Item key="1" >
                <Link to="/admin/home">
                 <i class="fas fa-home"> home</i>
                </Link>
                
            </Menu.Item>
            <Menu.Item key="2" >
                <Link to="/admin/users">
                    <i class="fas fa-user">users</i>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>
  )
}
