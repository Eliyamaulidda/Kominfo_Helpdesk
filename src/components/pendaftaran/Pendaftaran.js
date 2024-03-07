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
import gbr from './Assets/gbr.png'

function App() {
  return (
    <div className="hero d-flex justify-content-center mt-5">
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h4 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center text-uppercase ">
                    Layanan Pendaftaran Website
                  </h4>
    
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Nama Website</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nama Website" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Logo">
                      <Form.Label className="text-center">Logo Website</Form.Label>
                      <MDBFile size='sm-4' id='customFile' />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="URL">
                        <Form.Label className="text-center">
                          URL
                        </Form.Label>
                        <Form.Control type="text" placeholder="Masukkan URL" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="Token">
                        <Form.Label>Token</Form.Label>
                        <Form.Control type="text" placeholder="Token" />
                      </Form.Group>

                      <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Status: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Publish' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Private' inline />
                  </div>

                      <div className='mb-4'>
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Konfirmasi' />
                      </div>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={gbr} fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default App;