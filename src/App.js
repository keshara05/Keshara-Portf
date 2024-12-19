import React, { useEffect } from 'react'; 
import './App.css'; 
import Navbar from './Component/Navbar'; 
import Skills from './Component/Skills'; 
import About from './Component/AboutMe'; 
import Projects from './Component/Projects'; 
import Contact from './Component/Contact'; // Ensure Contact component is imported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Properly import necessary modules

function App() {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} /> {/* Ensure paths match your intended navigation */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
