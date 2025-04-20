import React from 'react';
import LandingCover from './pages/LandingCover';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="bg-video">
        <source src="/backgroundvideo.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col items-center justify-center space-y-10 py-10">
        <LandingCover />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
