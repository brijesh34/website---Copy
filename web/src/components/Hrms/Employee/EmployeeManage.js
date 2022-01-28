import React from 'react';
import Container from 'react-bootstrap/Container'
import { NavDropdown, Nav, Navbar, Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
//import EmployeeManage from './EmployeeManage';
// import EventsManage from './EventsManage';
// import InterviewManage from './InterviewManage';
// import Attendance from './Attendance';
// import Policy from './Policy';
import Tab from 'react-bootstrap/Tab'
import AddNewEmp from './EmployeeRelated/AddNewEmp';
import UpdateEmp from './EmployeeRelated/UpdateEmp';
import TimeSheet from './EmployeeRelated/TimeSheet';
import DocumentsEmp from './EmployeeRelated/DocumentsEmp';
import LeaveEmp from './EmployeeRelated/LeaveEmp';
import OfficialRecEmp from './EmployeeRelated/OfficialRecEmp';

const EmployeeManage = () => {
  return (
  <div> 

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Add New Employee</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Update Employee Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Working/Time Sheet</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Leave Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">Documents</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sixth">Official Record</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} style={{background:"cornsilk"}}>
      <Tab.Content>
         <Tab.Pane eventKey="first">
          <AddNewEmp/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <UpdateEmp/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <TimeSheet/>
        </Tab.Pane>     
         <Tab.Pane eventKey="fourth">
          
          <LeaveEmp/>
        </Tab.Pane>      
          <Tab.Pane eventKey="fifth">
          <DocumentsEmp/>
        </Tab.Pane>

        <Tab.Pane eventKey="sixth">
          <OfficialRecEmp/>
        </Tab.Pane>


 

      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>








  </div>
  );
};

export default EmployeeManage;
