import React, { Component,useState } from 'react';
 import './Slo.css';
const SlotM=(props)=>{

var hits=0;
var miss=0;
function hits(){
return hits++;
};
    
    if((props.x===props.y)&&(props.y===props.z))
    {
        hits= hits+1;
        console.log("total hits:----"+hits);
        <h2>{hits}</h2>
        
    }
    else{
        miss=miss+1;
        console.log("total misses:--"+miss)
    }


    if((props.x===props.y)&&(props.y===props.z))
    {
       //refreshPage();
        return(<>
<h1>
    {props.x} {props.y} {props.z}
    {/* {props.setCount}  */}
    
    
    </h1>
<h1> This is Matching</h1>
<h4>total hits:-{hits}</h4>
<h4>total miss:-{miss}</h4>
<hr/>
</>
        );
    }
    else
    {
        return(<>
<h1>
    {props.x} {props.y} {props.z}
</h1>
<h1> This is not Matching</h1>
<h4>total hits:-{hits}</h4>
<h4>total miss:-{miss}</h4>

{/* <button onClick={props}>Try again</button> */}
<hr/>
</>
        );
    }
}

export default SlotM;