import React, { useState } from 'react'
import "./listuser.scss"

import {Switch,List,Avatar,Button} from "antd"
import { UserOutlined,EditOutlined,StopOutlined,DeleteOutlined,CheckOutlined } from '@ant-design/icons';
import { Modal } from '../modal/Modal';
import { EditUserForm } from './EditUserForm';

export const ListUser = (props) => {

    const {usersInactive,usersActive} = props

    const [viewUsersActive, setviewUsersActive] = useState(true);

    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const [modalTitle, setModalTitle] = useState("");

    const [modalContent, setmModalContent] = useState("");

    
  return (


    <div className='list-users'>
        <div className='list-users__switch'>
            <Switch 
                defaultChecked
                onChange={()=> setviewUsersActive(!viewUsersActive)}
            />
            <span>
                {
                    viewUsersActive ? <UsersActive usersActive={usersActive} setIsVisibleModal={setIsVisibleModal} setModalTitle={setModalTitle}
                    setmModalContent={setmModalContent}
                    /> : <UsersInactive usersInactive={usersInactive} />
                }
            </span>
        </div>
        <Modal title={modalTitle}
         isVisible={isVisibleModal}
         setIsVisible={setIsVisibleModal}
         >
           {modalContent}
        </Modal>
    </div>
  )
}

const UsersActive = ({usersActive,setIsVisibleModal,setModalTitle,setmModalContent})=>{


    const editUser = (user)=>{

        setIsVisibleModal(true)
        setModalTitle(`${user.email} Editar` )
        setmModalContent(<EditUserForm user={user} />)

    }

    return (
       <List 
          className='users-active'  
        itemLayout='horizontal'
        dataSource={usersActive}
        renderItem={user => (
            <List.Item 
                actions={[
                    <Button type='primary'
                        onClick={()=> editUser(user)}
                    >

                        <EditOutlined />
                    </Button>,
                    <Button type='warning'
                        onClick={()=>console.log("Desactivar usuario")}
                    >

                        <StopOutlined />
                    </Button>,
                    <Button type='danger'
                        onClick={()=>console.log("Eliminar usuario")}
                    >

                        <DeleteOutlined />
                    </Button>,

                ]}
            >
                <List.Item.Meta avatar={<Avatar size="small" icon={<UserOutlined />} />} title={`
                    ${user.email ? user.email : "..."}
                    
                
                `} />
            </List.Item>
        )}
       />
    )
}
const UsersInactive = ({usersInactive})=>{

    return (
        <List 
           className='users-active'  
         itemLayout='horizontal'
         dataSource={usersInactive}
         renderItem={user => (
             <List.Item 
                 actions={[
                     <Button type='warning'
                         onClick={()=>console.log("Activar usuario")}
                     >
 
                         <CheckOutlined />
                     </Button>,
                     <Button type='danger'
                         onClick={()=>console.log("Eliminar usuario")}
                     >
 
                         <DeleteOutlined />
                     </Button>,
 
                 ]}
             >
                 <List.Item.Meta avatar={<Avatar size="small" icon={<UserOutlined />} />} title={`
                     ${user.email ? user.email : "..."}
                     
                 
                 `} />
             </List.Item>
         )}
        />
     )
}
