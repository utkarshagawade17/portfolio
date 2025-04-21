// src/App.js

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import SmallTerminal from './components/SmallTerminal';
import AboutMeTerminal from './components/AboutMeTerminal';
import WorkExperienceTerminal from './components/WorkExperienceTerminal';
import BigTerminal from './components/BigTerminal';
import SkillsTerminal from './components/SkillsTerminal';
import ContactTerminal from './components/ContactTerminal';
import './App.css';

export default function App() {
  const [step, setStep] = useState('landing');

  return (
    <div className="app-container relative">
      {step === 'landing' && <LandingPage onBeginJourney={() => setStep('smallTerminal')} />}
      {step === 'smallTerminal' && <SmallTerminal onComplete={() => setStep('aboutMeTerminal')} />}
      {step === 'aboutMeTerminal' && <AboutMeTerminal onGoToExperience={() => setStep('experienceTerminal')} />}
      {step === 'experienceTerminal' && (
        <WorkExperienceTerminal
          onBackToAboutMe={() => setStep('aboutMeTerminal')}
          onGoToProjects={() => setStep('projectsTerminal')}
        />
      )}
      {step === 'projectsTerminal' && (
        <BigTerminal
          onBackToExperience={() => setStep('experienceTerminal')}
          onGoToSkills={() => setStep('skillsTerminal')}
        />
      )}
      {step === 'skillsTerminal' && (
        <SkillsTerminal
          onBackToProjects={() => setStep('projectsTerminal')}
          onGoToContact={() => setStep('contactTerminal')}
        />
      )}
      {step === 'contactTerminal' && <ContactTerminal onBackToSkills={() => setStep('skillsTerminal')} />}
    </div>
  );
}
