import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/home/Navbar';
import Berita4 from './components/home/berita/Ber4';
import Footer from './components/home/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Berita4 />
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
