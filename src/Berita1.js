import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/home/Navbar';
import Berita1 from './components/home/berita/Ber1';
import Footer from './components/home/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Berita1 />
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
