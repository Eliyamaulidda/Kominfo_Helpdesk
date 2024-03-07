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
						<h2>Sekjen: Manfaatkan Teknologi untuk Berikan Pelayanan Publik Prima</h2>
						<small>3 April 2023</small>
						<p class="mt-4 summary">Jakarta Pusat, Kominfo - Sekretaris Jenderal Kementerian Komunikasi dan Informatika Mira Tayyiba meningkatkan literasi dan kecakapan digital. Menurutnya, potensi digitaliasi harus bisa dimanfaatkan untuk memberikan pelayanan publik yang prima kepada masyarakat.</p>

						<img src={ber4}></img>
						<div class="story mt-4" style={{ textAlign: 'justify' }}>
							<p></p>
                            
							<p>“Sebagai pelayan publik, merupakan kewajiban kita untuk terus mengasah kapasitas penugasan dan etos bekerja di era digital. Tidak terbatas pada kemampuan mengoperasikan komputer saja, aparatur pemerintah juga harus mampu secara bijak menavigasikan diri beraktivitas di tengah derasnya arus dunia maya dan secara mahir memanfaatkan pesatnya teknologi digital,” ujarnya dalam Webinar Literasi Digital Sektor Pemerintahan Bagi Sivitas Kementerian Kominfo, dari Jakarta Pusat, Senin (03/04/2023).</p>
							<p>Mengutip hasil studi Digital Skills Report 2021, Sekjen Kementerian Kominfo menjelaskan saat ini hanya 19% tenaga kerja Indonesia yang mengaplikasikan literasi digital level dasar. Sementara, hanya 6% lainnya yang mampu mengaplikasikan kecakapan digital teknis di level menengah.</p>
							<p>“Dalam konteks ini, aparatur pemerintah harus menyadari posisi sebagai pelayan publik yang profesionalitasnya diukur salah satunya melalui kualitas layanan sekaligus kepuasan publik terhadap pelayanan yang diberikan baik di ruang publik maupun ruang digital. Bahkan, tema transformasi digital menjadi salah satu tema dari reformasi birokrasi,” tuturnya.</p>
							<p>Sekjen Mira Tayyiba mendorong Sivitas Kementerian Kominfo memanfaatkan teknologi digital dengan optimal agar dapat membantu meningkatkan efisiensi, produktivitas, dan kualitas pekerjaan. </p>
                            <p>“Misalnya, aplikasi email dapat mempermudah pegawai untuk berkomunikasi dengan rekan kerja dan mitra kolaborasi, serta memastikan semua informasi penting diterima dan diteruskan dengan tepat waktu,‘ ujarnya. </p>
                            <p>Menurut Sekjen Kementerian Kominfo, literasi dan kecakapan digital Indonesia saat ini masih terbilang rendah. Hasil Indeks Nasional Literasi Digital Indonesia pada skor 3,49 di tahun 2021 dan menjadi 3,54 di tahun 2022. </p>
                            <p>“Walaupun skor indeks literasi digital 2022 mengalami peningkatan sebesar 0,5 point, kita juga harus mampu terus beradaptasi terhadap kehadiran teknologi baru seperti Artificial Intellegence, Extended Reality, Quantum Computing, dan masih banyak lagi. Apabila tidak dimanfaatkan dengan lugas dan bijak, maka akan membuat kita makin tertinggal,” tandasnya.</p>
                            <p>Oleh karena itu, Sekjen Mira Tayyiba mendorong seluruh Sivitas Kementerian Kominfo untuk terus meningkatkan keterampilan dan literasi digital mereka melalui pelatihan dan pembelajaran mandiri. </p>
                            <p>“Potensi masif yang dibawa oleh digitalisasi maupun hal negatif yang ada di ruang digital harus dapat dimitigasi, sekaligus dikelola dengan baik oleh seluruh komponen masyarakat, termasuk aparatur pemerintah. Termasuk kapabilitas, kelugasan, sekaligus etos kerja dalam mewujudkan pelayanan publik yang prima,” harapnya.</p>
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