import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ITConsultancy from './pages/ITConsultancy';
import GiftSolutions from './pages/GiftSolutions';
import HRTraining from './pages/HRTraining';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/it-consultancy" element={<ITConsultancy />} />
        <Route path="/gift-solutions" element={<GiftSolutions />} />
        <Route path="/hr-training" element={<HRTraining />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
