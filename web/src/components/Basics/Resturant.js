import React, {useState} from "react";
import './style.css';
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";

const uL= [... new Set(Menu.map((curElem)=>{
    return curElem.category;
})), "All",
];


console.log(uL);
const Resturant=()=>{
    const [menudata, setMenuData] = useState(Menu);

    const [menulist,setmenulist]=useState(uL);
    //////for filter
const filterItem=(category)=>{
    if(category==="All"){
      //return  setMenuData(Menu);
        setMenuData(Menu);
       return;
    }
    const updatedList=Menu.filter((curElem)=>
    {
        return curElem.category===category;
    })
    setMenuData(updatedList);
};

//console.log(menudata);
    return(

        <><Navbar filterItem={filterItem} menulist={menulist}/>
        
        <MenuCard menudata1={menudata}/>
        {/* <div className="card-container">
           <div className="card">
           <div className="card-body">
               <span className="card-number card-circle subtle">1</span>
               <span className="card-author subtle">BreakFast</span>
<h2 className="card-title"> maggi</h2>
<span className="card-description subtle">
    lore naskdjkbf djbskadb jaskbbf kasjdbdbd 
    kasddb kasbdb kasdnbd kasdb 
</span>
<div className="card-read">Read</div>
           </div> */}
           {/* <img src={image} alt="images" className="card-media"/> */}
           {/* <span className="card-tag subtle">OrderNow</span>
           </div>

        </div> */}
        </>
    );
}
export default Resturant;