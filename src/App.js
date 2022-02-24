import './App.scss';
import { DatePicker, Space,Card } from 'antd';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { Admin } from './pages/admin/Admin';
import { SignIn } from './pages/admin/SignIn';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

import { routes } from './config/routes';
import { AuthProvider } from './providers/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {
            routes.map(ruta =>{
              return <Route path={ruta.path} element={<ruta.Component />}>
                {
                  ruta.routes.map(route=>{
                    return <Route path={route.path} element={<route.Component />} />
                  })
                }
              </Route>
            })
          }
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    

  );
}


export default App;
