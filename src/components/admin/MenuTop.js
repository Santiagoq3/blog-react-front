import React from 'react'
import "./menutop.scss"
import {Button,Icon} from "antd"
import { logout } from '../../api/auth'

export const MenuTop = ({menuIsOpen,setmenuIsOpen}) => {


    const logoutUser = ()=>{
        logout()
        window.location.reload()
    }

  return (
    <div className='menutop'>
        <div className='menutop-left'>
            <span>Blog de Santi</span>
            <Button type='link' onClick={()=> setmenuIsOpen(menuIsOpen = !menuIsOpen)}>
                Open
            </Button>
        </div>
        <div className='menutop-right'>
            <Button onClick={logoutUser} type='link'>
                Cerrar Sesion
            </Button>
        </div>
    </div>
  )
}
