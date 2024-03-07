import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import dr from "./Assets/kominfo1.png";

const Dokter = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>Buat Janji dengan Dokter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className='fw-bold'>Nama Website/Aplikasi</h5>
          <small className='text-info'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo<span className='text-muted'><i class="ms-3 fa-solid fa-location-dot me-2"></i>Rs. Dokter Soedono Madiun</span></small>
          <hr/>
          <Form>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Pilih Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Pilih Jam</Form.Label>
                <Form.Select>
                  <option>==Jam Operasional==</option>
                  <option>08.00 - 09.00</option>
                  <option>09.00 - 10.00</option>
                  <option>10.00 - 11.00</option>
                  <option>11.00 - 12.00</option>
                  <option>13.00 - 14.00</option>
                  <option>14.00 - 15.00</option>
                </Form.Select>
              </Col>
            </Row>
          </Container>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" className='text-light' size='sm' onClick={handleClose}>
            Buat Janji
          </Button>
          <Button variant="outline-info" size='sm' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h4 className='fw-bold' style={{ marginLeft:'10px' }}> Website Rekomendasi</h4>
        </div>
      </div>
    </div>

    <div className='container mt-2'>
      <div className='row'>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfok</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>



    <div className='container mt-2'>
      <div className='row'>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://diskominfo.madiunkab.go.id/#">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={dr} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Diskominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'>Nama Website/Aplikasi</Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Kementrian Komunikasi dan Informatika</small>
              <Button variant="info" className='text-light col-12 mt-2' size='sm' href="https://diskominfo.madiunkab.go.id/#">Kunjungi Website</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dokter;