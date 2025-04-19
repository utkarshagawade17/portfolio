import React from 'react';
import ReactPageFlip from 'react-pageflip';
import LandingCover from './pages/LandingCover';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

const Page = React.forwardRef(({ children, pageBg }, ref) => {
  return (
    <div className={`page ${pageBg} rounded-2xl drop-shadow-md text-slate-700`} ref={ref}>
      {children}
      <div className="absolute bottom-4 right-4">Turn the page ➡️</div>
    </div>
  );
});

const App = () => {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="bg-video">
        <source src="/backgroundvideo.mp4" type="video/mp4" />
      </video>
      <ReactPageFlip
        className="book"
        width={400}
        height={600}
        drawShadow={true}
        maxAngle={30}
        swipeDistance={30}
      >
        <Page pageBg="bg-pink-100">
          <LandingCover />
        </Page>
        <Page pageBg="bg-blue-100">
          <AboutMe />
        </Page>
        <Page pageBg="bg-green-100">
          <Projects />
        </Page>
        <Page pageBg="bg-yellow-100">
          <Skills />
        </Page>
        <Page pageBg="bg-purple-100">
          <Contact />
        </Page>
      </ReactPageFlip>
    </div>
  );
};

export default App;
