import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutMe from './pages/AboutMe'; 
import Education from './pages/Education'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/education" element={<Education />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
