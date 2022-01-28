import React from 'react';
 const PropEx=(props)=>{
     const maArray=['apple','banana','orange'];
     maArray.map((fruit)=>console.log(fruit));
     //console.log("this is :"+props.name);
    return(
        <>
<h2>hello , i am 

<div>{maArray}</div>
</h2>


</>
    );
};

export default PropEx;