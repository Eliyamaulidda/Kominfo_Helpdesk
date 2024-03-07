import ber1 from "./Assets/Berita1.jpg";
import ber2 from "./Assets/Berita2.jpg";
import ber3 from "./Assets/Berita3.jpg";
import ber4 from "./Assets/Berita4.jpeg";
import ber5 from "./Assets/berita3.1.jpg";
import ber6 from "./Assets/berita3.2.jpg";

const Detail = () => {
    return(
        <>
        <div class="container main-news mt-5">
				<div class="row">
					<div class="col-12 mt-4">
						<h2>Wujudkan Satu Data Indonesia, Dinas KOMINFO Gelar Bimtek di Kecamatan dan Desa</h2>
						<small>9 Maret 2023</small>
						<p class="mt-4 summary">Pemerintah Kabupaten Madiun melalui Dinas Komunikasi dan Informatika menggelar bimbingan teknis implementasi Satu Data Indonesia lingkup kecamatan dan desa/kelurahan se-Kabupaten Madiun.</p>

						<img src={ber3}></img>
						<div class="story mt-4" style={{ textAlign: 'justify' }}>
							<p></p>
                            
							<p>Asisten Administrasi Umum, Soelistyo Widyantono, dalam sambutannya  mengutarakan SDI adalah kebijakan tata kelola data yang menghasilkan data yang akurat, mutakhir, terpadu dan dapat dipertanggung jawabkan. Data ini nantinya untuk menentukan kebijakan Pemerintah dalam merencanakan pembangunan. “Satu data ini sangat penting, dibutuhkan  akurasi data, dalam hal ini data dari Pemerintah Desa. Selain akurat, datanya harus bisa dipertanggung jawabkan”, ujarnya. Untuk mewujudkan hal tersebut, maka diperlukan pemenuhan data-data Prodeskal yang bersinergi dengan kebutuhan data di Provinsi Jawa Timur dan data pusat, sehingga berguna bagi pengguna data.</p>
							<img src={ber5}></img>
							<p>Kepala Bidang Statistik, Bambang Sudjijono, menjelaskan tujuan dari kegiatan ini untuk memvalidkan data yang menjadi kunci untuk menyusun semua kebijakan Pemerintah Kabupaten Madiun khususnya RPJMD. “Jadi rencana daerah  pembangunan jangka panjang maupun jangka pendek, semuanya didukung dengan adanya data ini” tuturnya.</p>
							<p>Dimtek yang diselenggarakan di Hallroom Hotel Telaga Mas Sarangan Kabupaten Magetan ini dilaksanakan selama dua hari, Rabu dan Kamis tanggal 8 dan 9 Maret 2023 dengan jumlah peserta 251 orang terdiri dari Kasi PMP kecamatan, pengelola Dastik kecamatan, pendamping Prodeskel kecamatan dan pengelola Prodeskel desa/kelurahan. Dengan narasumber dari Badan Pusat Statistik Kabupaten Madiun, Dinas PMD Kabupaten Madiun, dan tenaga ahli IT.</p>
							<img src={ber6}></img>
						</div>
                    </div>
				</div>
		</div>
        
        <div class="section mt-4 container">
        <hr/>
				<div class="section-title">
					<p className='fs-5 fw-bold'>Berita Lainnya</p>
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

export default Detail;