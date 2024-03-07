import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/web/Navbar';
import Heros from './components/web/Heros';
import Daftar from './components/web/Daftar';
import Kategori from './components/web/Kategori';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="App">
      <div className='mt-5'>
        <Navbar />
        <Heros />
        <Daftar />
        <Kategori />
      </div>
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
