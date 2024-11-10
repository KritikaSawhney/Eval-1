import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Progress from './components/Progress';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landing Page/LandingPage';
import Market from './pages/Market/Market';
import Footer from './components/Footer';
import CryptoConverter from './pages/Crypto Converter/CryptoConverter';
import Feedback from './pages/Feedback/Feedback';
import About from './pages/About/About';
import Feature from './pages/Feature/Feature';
import Newsletter from './pages/Newsletter/Newsletter';
import Pricing from './pages/Pricing/Pricing';
import ContactUs from './pages/Contact Us/Contact';
import SignUp from './pages/Signup/Signup';
import SignIn from './pages/Signin/Signin';
import News from './pages/News/News';
// import LearnCrypto from './pages/Learn/Learn';
import TermsOfUse from './pages/Terms/Terms';

function App() {
  return (
    <Router>
      <Progress />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/CryptoConvertor' element={<CryptoConverter />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/market' element={<Market />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/Newsletter' element={<Newsletter />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/News' element={<News />} />
        {/* <Route path='/Learn' element={<LearnCrypto />} /> */}
        <Route path='/TermsOfUse' element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
