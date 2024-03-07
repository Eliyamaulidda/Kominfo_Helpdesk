import React, { useState } from 'react';

import ber1 from "./Assets/Berita1.jpg";
import ber2 from "./Assets/Berita2.jpg";
import ber3 from "./Assets/Berita3.jpg";
import ber4 from "./Assets/Berita4.jpeg";

const Artikel = () => {
  return (
    <>
		<hr/>
			<div class="section mt-4">
				<div class="section-title">
					<p className='fs-5 fw-bold'>Berita Terbaru</p>
				</div>

				<div class="row mt-2">
					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={ber1} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Berita1" className='text-dark'>
						Indonesia Jadi Tuan Rumah Piala Dunia U-20 2023? Awas Disinformasi!
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={ber2} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Berita2" className='text-dark'>
						Diskominfo Kabupaten Madiun Terima Kunjungan Kerja Diskominfotik Kota Blitar
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">			
							<img src={ber3} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Berita3" className='text-dark'>
						Wujudkan Satu Data Indonesia, Dinas KOMINFO Gelar Bimtek di Kecamatan dan Desa
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={ber4} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Berita4" className='text-dark'>
						Sekjen: Manfaatkan Teknologi untuk Berikan Pelayanan Publik Prima
						</a>
					</div>

				</div>
			</div>
    	</>
  	);
}

export default Artikel;