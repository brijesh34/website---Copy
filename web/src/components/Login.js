import React from "react";
import { useState } from "react";
//import {BrowserRouter, Routes , Route, Redirect} from "react-router-dom";
const Login=()=>{
const [email,setName]=useState(" ");
const [pass,setPass]=useState(" ");


const handleSubmit=(event)=>{
  event.preventDefault();
  alert(`the email you entered was:${email}****** and password is:${pass} `);
  
  //setName("your email:"+email);
  //setPass("your Password:"+pass);
  // <Redirect to='/signup'/>
  
}

return(

  <>
 
  <form onSubmit={handleSubmit}>
    <label for ="email">Enter the email:</label>
    <input type="text" id=" email" 
    name="email" value={email}
    onChange={(e)=>setName(e.target.value)}></input>
 <br/><label for ="pass">Enter the password</label> 
 <input type="password" id="pass" name="pass"
  value={pass} onChange={(e)=>setPass(e.target.value)}></input>
 <br/>
 <input type="submit" value="submit"></input> 
 
  </form>
  
  </>
);



}
export default Login;