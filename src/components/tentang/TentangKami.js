import React from "react";
import { Container } from "react-bootstrap";

import gbr1 from './Assets/logo.png';


const Tentang = () => {
    return(
        <section>
            <div className="tentang container">
            <div className="row">
            <div className="d-flex mt-4 pt-5">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img src={gbr1} alt='img2' className="img-fluid " style={{ borderRadius: '6px' }}></img>
                </div>
                <div className="ps-4 mt-3 col-lg-8 col-md-12 col-sm-12">
                    <h3 className="fw-bold">HELPDESK</h3>
                    <p className='mt-3 text-muted' style={{ textAlign: 'justify' }}>Helpdesk adalah sebuah website yang dibuat untuk membantu masyarakat kabupaten Madiun dalam mengakses aplikasi-aplikasi yang dimiliki oleh dinas - dinas yang ada di Kabupaten Madiun. Selain itu website helpdesk merupakan wadah untuk mempermudah OPD atau dinas dalam mengajukan aplikasi mereka agar dapat diakses masyarakat melalui katalog website Diskominfo Kabupaten Madiun.</p>
                    <p className='mt-3 text-muted' style={{ textAlign: 'justify' }}>Diskominfo kabupaten Madiun adalah pusat pelayanan komunikasi dan informasi masyarakat kabupaten Madiun. Kabupaten Madiun telah memiliki beberapa aplikasi yang dapat membantu masyarakat setempat. Oleh karena itu untuk mempermudah masyarakat dalam mengakses website yang dimiliki oleh dinas kabupaten Madiun maka kami membuat website bernama HELPDESK.</p>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Tentang;