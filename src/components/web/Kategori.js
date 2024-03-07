import React, { useState } from 'react';
import Button from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Kategori() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Semua', value: '1' },
    { name: 'Informatika', value: '2' },
    { name: 'Pariwisata', value: '3' },
    { name: 'Pendidikan', value: '4' },
    { name: 'Pertahanan', value: '5' },
    { name: 'Pertanian', value: '6' },
    { name: 'Sosial', value: '7' },
    { name: 'Hukum', value: '8' },
    { name: 'Keuangan', value: '9' },
    { name: 'Pajak', value: '10' },
  ];

  return (
    <div className='container mt-4'>
    {radios.map((radio, idx) => (
        <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            className="mx-2"
            type="radio"
            size='sm'
            variant={idx % 2 ? 'outline-info' : 'outline-info'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}>
            {radio.name}
        </ToggleButton>
    ))}
    </div>
  );
}

export default Kategori;

// const Kategori = () => {
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">

//                 </div>
//             </div>
//         </div>       
//     )
// }