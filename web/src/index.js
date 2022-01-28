import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import ReactDOM  from "react-dom";

// ReactDOM.render(
//   <><h1>hello this is boom guys</h1>
//   <h2>brijesh 23457</h2></>,
//   document.getElementById("root")
// );





// import React from "react";
// import ReactDOM from "react-dom";
// const curDate=new Date().toLocaleDateString();
// var curTime=new Date().toLocaleTimeString();

// ReactDOM.render(
// <>
// <h1> -----: This is Date and Time:----</h1>
// <h4>the date is:-{curDate}</h4>
// <h4>the time is:-{curTime}</h4>
// </>,
// document.getElementById("root")

// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// let curDate=new Date(2022,20,2,16);
// curDate=curDate.getHours();

// let greeting="";
// const cssStyle={};

// if( curDate>1&& curDate<=12){
// greeting="good morning";
// cssStyle.color="green";
// }
// else if(curDate>12&&curDate<19)
// {
//   greeting="good After noon";
//   cssStyle.color="orange";
// }
// else{
//   greeting ="good night";
//   cssStyle.color="blue";
// }
// ReactDOM.render(
// <h1>hello sir,<span style={cssStyle}>{greeting}</span>
// </h1>,document.getElementById("root")
// );