import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing Page/LandingPage';
import Market from './pages/Market/Market';
import Footer from './components/Footer';
import CryptoConverter from './pages/Crypto Converter/CryptoConverter';
import Feedback from './pages/Feedback/Feedback';
import About from './pages/About/About';
import Feature from './pages/Feature/Feature';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/CryptoConvertor' element={<CryptoConverter />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/market' element={<Market />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
