import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import logo from "./Assets/kominfo1.png";
import logo1 from "./Assets/kominfo1.png";
import logo2 from "./Assets/kominfo1.png";


const Dokter = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-sm-12'>
          <h4 className='fw-bold'>Temukan Web Yang Anda Inginkan</h4>
        </div>
      </div>
    </div>
    <div className='mt-2'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={logo} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Dinas Kominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'></Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Website Kementerian Komunikasi dan Informatika.</small>
              <Button className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/" onClick={handleShow}>Selengkapnya</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={logo1} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Dinas Kominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'></Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Website Kementerian Komunikasi dan Informatika.</small>
              <Button className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/" onClick={handleShow}>Selengkapnya</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={logo2} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Dinas Kominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'></Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Website Kementerian Komunikasi dan Informatika.</small>
              <Button className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/" onClick={handleShow}>Selengkapnya</Button>
            </Card.Body>
          </Card>
        </div>

       <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
          <Card border="light" className='bayangan kartu' style={{ width: '16rem' }}>
            <Card.Img className='p-2' variant="top" src={logo2} style={{ borderRadius: '16px' }}/>
            <Card.Body>
              <div className='row'>
                <div className='col-12'>
                <small className='text-info fw-bold'><i class="fa-solid fa-stethoscope me-2"></i>Dinas Kominfo</small>
                </div>
              </div>
              <Card.Title className='fw-bold'></Card.Title>
              <small className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Website Kementerian Komunikasi dan Informatika.</small>
              <Button className='text-light col-12 mt-2' size='sm' href="https://www.kominfo.go.id/" onClick={handleShow}>Selengkapnya</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dokter;