import React from 'react';
import { useState } from 'react';




const SignUp = () => {

const[name,setName]=useState(" ");
const[age,setAge]=useState(" ");
const[phone,setPhone]=useState(" ");
const[pass,setPass]=useState(" ");

const handler=(event)=>{
    event.preventDefault();
    console.log(`your registration completed successfully :\n your name:${name}\nyour age:${age}
    
    \nyour phone no:${phone}`);

}
    return (
        <div>
            <form onSubmit={handler}>
                <label>Enter your name:
                </label>
                <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <br/><br/><label>Enter your age:</label>
                <input type="number" id="age" name="age" value={age} onChange={e=>setAge(e.target.value)}></input>
                <br/><br/> <label>Enter your phone no:</label>
                <input type="number" id="phone" name="phone" value={phone} onChange={e=>setPhone(e.target.value)}></input>
                <br/> <br/><label>Enter password:</label>
                <input type="password" id="pass" name="pass" value={pass} onChange={e=>setPass(e.target.value)}></input>
                <br/><br/> <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignUp
