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


function App() {

  return (
    <div>
      <h1>App</h1>
      <Home />
      <Admin />
      <SignIn />
      <Contact />
    </div>

  );
}


export default App;
