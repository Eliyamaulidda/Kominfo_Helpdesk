import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className="hero d-flex justify-content-center mt-5">
      <Container>
         <Card.Body className='mt-5'>
        <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=Dinas Komunikasi Dan Informatika Kabupaten Madiun Jl. Mastrip No.23, Mojorejo, Kec. Taman, Kota Madiun, Jawa Timur 63139&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" ></iframe> 
      </Card.Body>
      </Container>
    </div>
  );
}