import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <Navbar />

        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home/>}/>
          {/* About page */}
          <Route path="/about" element={<About />}/>
          {/* Contact page */}
          <Route path="/contact" element={<Contact />}/>
        </Routes>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
    
  );
}

export default App;
