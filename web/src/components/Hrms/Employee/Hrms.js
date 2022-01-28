import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import EmployeeManage from './EmployeeManage';
import EventsManage from './EventsManage';
import InterviewManage from './InterviewManage';
import Attendance from './Attendance';
import Policy from './Policy';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Footer from '../Footer';



const Hrms = () => {
  return(
     <>
    <Router> 
     <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        
        <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        
      Inevitable Infotech
      </Navbar.Brand>


      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link  >
           <Link to="employeemanage">Employee Manage</Link>
           </Nav.Link>
        <Nav.Link > <Link to="eventmanage">Event Manage</Link></Nav.Link>
        <Nav.Link > <Link to="attendance">Attendance</Link></Nav.Link>
        <Nav.Link > <Link to="interview">Interview Manage</Link></Nav.Link>
        <Nav.Link > <Link to="policy">Policy</Link></Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{background:"black"}}>
  <Tab eventKey="one" title="Employee manage">
    <EmployeeManage/>
  </Tab>
  <Tab eventKey="two" title="Events Manage">
    <EventsManage/>
  </Tab>
  {/* for disable any tab use "disabled" */}
  <Tab eventKey="three" title="Attendance" >
    <Attendance />
  </Tab>

  <Tab eventKey="four" title="Policy">
    <Policy />
  </Tab>
  <Tab eventKey="five" title="Interview">
    <InterviewManage/>
  </Tab>
</Tabs>





  <Routes> 
                 {/* <Route exact path='employeemanage' element={<EmployeeManage/>}></Route>
                 <Route exact path='eventmanage' element={<EventsManage/>}></Route> 
                 <Route exact path='attendance' element={<Attendance/>}></Route>
                 <Route exact path='policy' element={<Policy/>}></Route>
                 <Route exact path='interview' element={<InterviewManage/>}></Route> */}
         
                  </Routes>
          <Footer/>
       </Router>
     </>
  )
  
  ;
};

export default Hrms;
