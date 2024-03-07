import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/kontak/Navbar';
import Footer from './components/home/Footer';
import Kontak1 from './components/kontak/Kontak1';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Kontak1 />
      <div className='container mt-5'>
      </div>
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
