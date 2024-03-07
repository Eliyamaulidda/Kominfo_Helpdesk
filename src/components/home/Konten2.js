import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const podcast = () => {
    return(
        <>
        <Card className='container bayangan mt-5 bg-info' border='light' style={{ borderRadius: '8px' }}>
            <div className='row'>
                <div className='col-md-6 col-sm-6'>
                    <h1 className='pt-5 px-4 text-light fw-bold'>Website Resmi Dinas Komunikasi dan Informatika Kabupaten Madiun</h1>
                    <p className='px-4 pt-1 text-light'>Akses website resmi dari DISKOMINFO Kab. Madiun sekarang juga.</p>
                    <Button variant="light" className='mx-4 text-info mb-3' href='https://diskominfo.madiunkab.go.id/'>Akses Sekarang</Button>
                </div>
                <div className='col-md-6 col-sm-6 p-0'>
                <iframe src="https://diskominfo.madiunkab.go.id/" style={{ paddingBottom: '-20px' }} width="100%" height="400px" />
                </div>
            </div>
        </Card>
      </>
    )
}

export default podcast;