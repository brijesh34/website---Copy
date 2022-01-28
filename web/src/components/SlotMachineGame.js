import React, { Component,useState } from 'react';
 import './Slo.css';
import SlotM from './SlotM';
const SlotMachineGame=()=>{
    let newTime=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(newTime);

const UpdateTime=()=>{
//time =ne
setCtime(newTime);
};

//setInterval(UpdateTime,1000);
   
    var items=['🦈','🍎','🥭'];
    var x1=items[Math.floor(Math.random() * items.length)];
    var y1=items[Math.floor(Math.random() *items.length)];
    var z1=items[Math.floor(Math.random() *items.length)];
    
    var hits=0;

    var list1=[x1, y1, z1];
    var list2=[x1, y1, z1];
    //var [list1,list2]=useState(list1);
   // const[x4,setx1]=useState(x1);
    // var incr=()=>{
    //     setx1(x4,z2);
    //      //list1=list2;
    //      console.log(x4);
    // };
   
   
    //var count=0;
    const[count,setCount]=useState(0);
    const[hit,setHit]=useState(0);
    const[mis,setMis]=useState(0);
    
    function refreshPage1() {
       // window.location.reload(false);
        //count=count+1;
        setCount(count + 1);
        setHit(hit + 1);
        //setCtime(newTime);
      }
      function refreshPage2() {
        // window.location.reload(false);
         //count=count+1;
         setCount(count + 1);
         setMis(mis + 1);
         //setCtime(newTime);
       }

if((x1===y1)&&(y1===z1))
{
    return(
<div className='sl'>

        <h1>🎰 Windows Slot Game 🎰</h1>
        <h1> {x1 +y1 +z1
                } </h1><br/><br/>
        
                <button onClick={refreshPage1}>Click to reload!</button>
                {/* <button onClick={incr}>Try Again</button> */}
                {/* <SlotM x={x1} y={y1} z={z1} hits={hits} ></SlotM> */}
                <br/><br/><br/>
                <h1>Total Attempts:---{count}</h1><br/><br/><br/>
                <h1>Total Hits:---{hit}   ♒    Total mis:---{mis}</h1>
        <br/><br/><br/><br/><h2>{ctime}</h2>
        {/* <button onClick="">Try Again</button> */}
        {/* <SlotM x={x3} y={y3} z={z3}/> */}
        {/* <SlotM list1={list1}/> */}
        {/* <button type='reset' value="refresh" >Try Again</button> */}
        
</div>
    )
}

else{
    return(
        <div className='sl'>
        
                <h1>🎰 Windows Slot Game 🎰</h1>
               <h1> {x1 +y1 +z1
                } </h1><br/><br/>
        
                <button onClick={refreshPage2}>Click to reload!</button>
                {/* <button onClick={incr}>Try Again</button> */}
                {/* <SlotM x={x1} y={y1} z={z1} hits={hits} ></SlotM> */}
                <br/><br/><br/>
                <h1>Total Attempts:---{count}</h1><br/><br/><br/>
                <h1>Total Hits:---{hit}   ♒    Total mis:---{mis}</h1>
                <br/><br/><br/><br/><h2>{ctime}</h2>

                {/* <h1>Total Hits:---{count}</h1>
                <h1>Total miss:---{count}</h1>
                <h1>Your{count}</h1> */}
                {/* <button onClick="">Try Again</button> */}
               
                {/* <button onClick="">Try Again</button> */}
                {/* <SlotM x={x3} y={y3} z={z3}/> */}
                {/* <SlotM list1={list1}/> */}
                {/* <button type='reset' value="refresh" >Try Again</button> */}
                
        </div>
            )
}

//     return(


        
//         <div className='sl'>
//         <h1>🎰 Windows Slot Game 🎰</h1>

//         <button onClick={refreshPage}>Click to reload!</button>
//         {/* <button onClick={incr}>Try Again</button> */}
//         <SlotM x={x1} y={y1} z={z1} hits={hits} ></SlotM>
//         <h1>Total Attempts:---{count}</h1>
//         {/* <h1>Total Hits:---{count}</h1>
//         <h1>Total miss:---{count}</h1>
//         <h1>Your{count}</h1> */}
//         {/* <button onClick="">Try Again</button> */}
//         {x1 +y1 +z1
//         } 
//         {/* <button onClick="">Try Again</button> */}
//         {/* <SlotM x={x3} y={y3} z={z3}/> */}
//         {/* <SlotM list1={list1}/> */}
//         {/* <button type='reset' value="refresh" >Try Again</button> */}
        
// </div>
//     );

}
export default SlotMachineGame;