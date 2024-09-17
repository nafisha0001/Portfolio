import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutMe from './pages/AboutMe'; 
import Education from './pages/Education'; 
import Skills from './pages/Skills';
import Certification from './pages/Certification';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} /> 
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/education" element={<Education />} /> 
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/certification" element={<Certification />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
