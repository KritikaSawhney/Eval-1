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
import News from './pages/News/News';
import Learn from './pages/Learn/Learn';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';




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
        <Route path='/News' element={<News />} />
        <Route path='/Learn' element={<Learn />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
