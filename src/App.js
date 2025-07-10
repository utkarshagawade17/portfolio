import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import SmallTerminal from './components/SmallTerminal';
import AboutMeTerminal from './components/AboutMeTerminal';
import WorkExperienceTerminal from './components/WorkExperienceTerminal';
import BigTerminal from './components/BigTerminal';
import SkillsTerminal from './components/SkillsTerminal';
import CertificationsTerminal from './components/CertificationsTerminal';
import ContactTerminal from './components/ContactTerminal';
import ThankYouTerminal from './components/ThankYouTerminal'; // ✅ Import Thank You
import './App.css';

export default function App() {
  const [step, setStep] = useState('landing');

  return (
    <div className="app-container relative">
       {/* Background Video */}
      <video autoPlay loop muted className="bg-video"> 
      <source src="/portfolio/backgroundvideo.mp4" type="video/mp4" />
      </video>

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
          onGoToCertifications={() => setStep('certificationsTerminal')}
        />
      )}
      {step === 'certificationsTerminal' && (
        <CertificationsTerminal
          onBackToSkills={() => setStep('skillsTerminal')}
          onGoToContact={() => setStep('contactTerminal')}
        />
      )}
      {step === 'contactTerminal' && (
        <ContactTerminal
          onBackToCertifications={() => setStep('certificationsTerminal')}
          onGoToThankYou={() => setStep('thankYouTerminal')}
        />
      )}
      {step === 'thankYouTerminal' && (
        <ThankYouTerminal
          onRestartJourney={() => setStep('landing')}
        />
      )}

    </div>
  );
}
