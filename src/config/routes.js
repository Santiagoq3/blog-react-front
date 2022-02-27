
//layouts
import { LayoutAdmin } from "../layouts/LayoutAdmin"
import { LayoutBasic } from "../layouts/LayoutBasic"

//admin pages
import { Admin } from "../pages/admin/Admin"
import { SignIn } from "../pages/admin/SignIn"

//user pages
import { Contact } from "../pages/Contact"
import { Home } from "../pages/Home"
import { User } from "../pages/user/User"


export const routes = [
    {
        path:"/admin",
        Component: LayoutAdmin,
        routes: [
            {
                path:"home",
                Component: Admin
            },
            {
                path:"login",
                Component: SignIn
            },
            {
                path:"users",
                Component: User
            },

        ]
    },
    {
        path:"/",
        Component: LayoutBasic,
        routes: [
            {
                path:"/",
                Component: Home
            },
            {
                path:"contact",
                Component: Contact
            }
        ]
    },
    {
        path:"/login",
        Component: SignIn,
        routes: [
            {
                
            }
        ]
    },
]