import ber1 from "./Assets/Berita1.jpg";
import ber2 from "./Assets/Berita2.jpg";
import ber3 from "./Assets/Berita3.jpg";
import ber4 from "./Assets/Berita4.jpeg";

const Detail = () => {
    return(
        <>
        <div class="container main-news mt-5">
				<div class="row">
					<div class="col-12 mt-4">
						<h2>Indonesia Jadi Tuan Rumah Piala Dunia U-20 2023? Awas Disinformasi!</h2>
						<small>5 April 2023</small>
						<p class="mt-4 summary">Jakarta Pusat, Kominfo - Tersebar konten video dengan narasi yang menyebut Presiden Joko Widodo langsung datang ke markas Federation Internationale de Football Association (FIFA). Konon, Presiden melobi Presiden FIFA Gianni Infantino agar Indonesia tetap menjadi tuan rumah Piala Dunia U-20 2023.</p>

						<img src="https://web.kominfo.go.id/sites/default/files/kominfo-cekhoaks-hoaks-disinformasi-misinformasi-facebook-indonesia-kembali-jadi-tuan-rumah-piala-dunia-u20-fifa.jpeg" class="mt-3 thumb"></img>
						<div class="story mt-4" style={{ textAlign: 'justify' }}>
							<p></p>
                            
							<p>Dalam video terdapat juga tulisan klaim "Presiden Jokowi turun tangan Indonesia tetap menjadi tuan rumah Piala Dunia U-20".</p>

							<p>Hasil penelusuran Tim AIS Kementerian Kominfo menemukan fakta, klaim Indonesia jadi tuan rumah karena Presiden Joko Widodo datang langsung ke markas FIFA itu tidak benar.  Dari laman cek fakta liputan6.com, diketahui bahwa klaim pada video tersebut adalah hoaks dan tidak memiliki sumber kredibel.</p>
							<p>Dalam laman resmi fifa.com, tidak ditemukan informasi seperti yang disebut dalam klaim.  Adapun pertemuan Presiden Joko Widodo dan Presiden FIFA Gianni Infantino pada video tersebut terjadi saat menghadiri Sidang Pleno Konferensi Tingkat Tinggi (KTT) ASEAN ke-35 di Bangkok.</p>
							<p>Berikut laporan harian isu hoaks, disinformasi dan misinformasi yang telah diidentifikasi oleh Tim AIS Kementerian Kominfo, Rabu (05/04/2023):</p>
							<br/><br/>
							<p>#1 [HOAKS] Akun WhatsApp Mengatasnamakan Bupati Blora</p>
							<p>#2 [HOAKS] Surat Perjanjian Penarikan Dana Mengatasnamakan Bank Indonesia</p>
							<p>#3 [HOAKS] Informasi Program Dana Hibah Mengatasnamakan Staf Kanwil Kemenag Provinsi Lampung</p>
							<p>#4 [HOAKS]  Air Garam Bisa Sembuhkan Berbagai Penyakit</p>
							<p>#5 [HOAKS] Akun Facebook Atta Aurel Adakan Giveaway</p>
							<p>#6 [DISINFORMASI] Indonesia Kembali Menjadi Tuan Rumah Piala Dunia U-20 2023 Usai Presiden Jokowi Turun Tangan Temui Presiden FIFA</p>
							<p>#7 [DISINFORMASI] DPR RI Resmi Dibekukan Presiden Jokowi</p>
							<p>#8 [DISINFORMASI] Video "akhirnya Ibu Ida Dayak bertemu langsung dengan bapak presiden Ri Jokowi dodo"</p>
							<p>#8 [DISINFORMASI] Semua Aset Arteria Dahlan Disita</p>
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