import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BackgroundSlideshow from './components/BackgroundSlideshow';

import './components/styles/General.css';
import './components/styles/NavBar.css';

const App = () => (
  <Router>
    <div className="app-container">
        <Header />
        <BackgroundSlideshow />
        <div className="content-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        <Footer />
    </div>
  </Router>
);

export default App;
