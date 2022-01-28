//import logo from './logo.svg';
import PropEx from './components/PropEx';
//import './App.css';
//import Resturant from "./components/Basics/Resturant";
//import SlotMachineGame from './components/SlotMachineGame';
import {BrowserRouter, Routes , Route} from "react-router-dom";

import Login from './components/Login';
import SignUp from './components/SignUp';
import Layout from './components/Layout';
import Hrms from './components/Hrms/Employee/Hrms';
import Navbar from './components/Hrms/Employee/Hrms';
import NavbarP from './components/Hrms/Employee/Hrms';

function App() {
  return (

    <div className="">
       {/* <Resturant/>
        */}
      {/* <PropEx/> */}
      {/* <BrowserRouter>  */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Layout/>}> */}
          {/* <Route index element={<Login/>}/> */}
          {/* <Route path="login" element={<Login/>}/> */}
          {/* <Route path="signup" element={<SignUp/>}/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter>  */}
{/* <SlotMachineGame/> */}
<Hrms/>
    </div>
  );
}

export default App;
