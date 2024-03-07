import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBRadio,
  MDBFile
}
from 'mdb-react-ui-kit';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="hero d-flex justify-content-center mt-5">
    <MDBContainer fluid className="p-3 my-5">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" class="img-fluid" alt="Phone image" />
  </MDBCol>

  <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h4 className="fw-bold mb-5 text-center">
                    Login
                  </h4>
    
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Username">
                        <Form.Label className="text-center">Username</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Username" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Password">
                        <Form.Label className="text-center">
                          Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Masukkan Password" />
                      </Form.Group>

                      <div className="d-flex justify-content-between mx-4 mb-4">
                      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Ingat Saya' />
                      <a href="!#">Lupa password?</a>
                      </div>
                      <div className="d-grid">
                      <Button href='Pendaftaran' outline className='mx-2 px-5' size='lg'variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

</MDBRow>

</MDBContainer>
    </div>
  );
}

export default App;