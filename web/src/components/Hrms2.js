import {BrowserRouter, Routes , Route} from "react-router-dom";
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import Login from './Login';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import SignUp from './SignUp';
import Layout from './Layout';

function Hrms2() {
  return (

    <div className="">
        <Navbar className="navbar navbar-dark bg-dark">
  <Container>
    
    <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>

    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         User Login
         </button>
        
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
         aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">Login Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form>
                  <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                     <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
               </form>
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
        
  </Container>
</Navbar>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
      </Route>
      </Routes>
      </BrowserRouter> 



      <div className="App">
    <div className="container p-5">
        
         
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         User Login
         </button>
        
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
         aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">Login Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form>
                  <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                     <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
               </form>
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
         </div>
      
    </div>

    </div>
  );
}

export default Hrms2;
