import React from 'react'
import "./menutop.scss"
import {Button,Icon} from "antd"
export const MenuTop = ({menuIsOpen,setmenuIsOpen}) => {
  return (
    <div className='menutop'>
        <div className='menutop-left'>
            <span>Blog de Santi</span>
            <Button type='link' onClick={()=> setmenuIsOpen(menuIsOpen = !menuIsOpen)}>
                Open
            </Button>
        </div>
        <div className='menutop-right'>
            <Button type='link'>
                Iniciar Sesion
            </Button>
        </div>
    </div>
  )
}
