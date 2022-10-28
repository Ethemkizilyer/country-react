import {Routes,Route, Navigate } from 'react-router-dom';
import './index.css';
import './output.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <div >
      <Nav />
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/:country' element={<CountryDetails/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
