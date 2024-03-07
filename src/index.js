import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Web from './Web';
import Kontak from './Kontak';
import Tentang from './Tentang';
import Segera from './Segera';
import Pendaftaran from './Pendaftaran';
import Berita1 from './Berita1';
import Berita2 from './Berita2';
import Berita3 from './Berita3';
import Berita4 from './Berita4';
import Login from './Login';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="Web" element={<Web />}/>
          <Route path="Kontak" element={<Kontak />}/>
          <Route path="Tentang" element={<Tentang />}/>
          <Route path="Segera" element={<Segera />}/>
          <Route path="Pendaftaran" element={<Pendaftaran />}/>
          <Route path="Berita1" element={<Berita1 />}/>
          <Route path="Berita2" element={<Berita2 />}/>
          <Route path="Berita3" element={<Berita3 />}/>
          <Route path="Berita4" element={<Berita4 />}/>
          <Route path="Login" element={<Login />}/>
      </Routes>
  </BrowserRouter>,
  rootElement
);
