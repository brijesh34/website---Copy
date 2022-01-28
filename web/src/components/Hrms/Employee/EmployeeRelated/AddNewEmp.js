import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavDropdown, Nav, Navbar, Row,Col} from 'react-bootstrap';
import React from 'react';

const AddNewEmp = () => {
  return (<div style={{background:"cornsilk"}}>
      <h2>
          Add new Employee


          </h2>
          <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>
 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Contact No.</Form.Label>
      <Form.Control type="number" placeholder="Password" />
    </Form.Group>
  </Row>

 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Select aria-label="Default select example">
  <option>Highest Degree</option>
  <option value="1">High School</option>
  <option value="2">Intermediate</option>
  <option value="3">Graduation</option>
  <option value="3">Post Graduation</option><option value="3">Diploma</option>
  <option value="3">Phd</option>
</Form.Select>
    </Form.Group>

     <Form.Group as={Col} controlId="formGridPassword">
     <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
          <label>Male</label>
        <input
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
         <label>Female</label>
        <input
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
         <label>Other</label>
        <input
          type="radio"
          label="other"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>

    </Form.Group> 
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Official Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Official Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Official Id</Form.Label>
      <Form.Control type="text" placeholder="Id" />
    </Form.Group>
  </Row>


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>HighSchool Marksheet</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Intermediate</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Graduation</Form.Label>
    <Form.Control type="file" />
  </Form.Group> <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Post Graduation</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Other</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form><br/><br/><br/><br/><br/><br/>
        </div>
  );
};

export default AddNewEmp;
