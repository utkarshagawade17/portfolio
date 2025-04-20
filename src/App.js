import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import { SmallTerminal } from './components/SmallTerminal';
import BigTerminal from './components/BigTerminal';
import SkillsTerminal from './components/SkillsTerminal';
import './App.css';

const App = () => {
  const [step, setStep] = useState('landing'); 
  // Possible values: 'landing', 'smallTerminal', 'bigTerminal', 'skillsTerminal'

  const handleBeginJourney = () => {
    setStep('smallTerminal');
  };

  const handleSmallTerminalComplete = () => {
    setStep('bigTerminal');
  };

  const handleGoToSkills = () => {
    setStep('skillsTerminal');
  };

  return (
    <div className="app-container relative">

      {step === 'landing' && (
        <LandingPage onBeginJourney={handleBeginJourney} />
      )}

      {step === 'smallTerminal' && (
        <SmallTerminal onComplete={handleSmallTerminalComplete} />
      )}

      {step === 'bigTerminal' && (
        <BigTerminal onGoToSkills={handleGoToSkills} />
      )}

      {step === 'skillsTerminal' && (
        <SkillsTerminal />
      )}

    </div>
  );
};

export default App;
