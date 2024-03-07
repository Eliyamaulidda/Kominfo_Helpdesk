import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/login/Navbar';
import Footer from './components/home/Footer';
import Masuk from './components/login/Masuk';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Masuk />
      <div className='container mt-5'>
      </div>
      <div className='container mt-5'>
      </div>
    </div>
  );
}

export default App;
