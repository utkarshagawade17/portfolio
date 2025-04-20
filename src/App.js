import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import { SmallTerminal } from './components/SmallTerminal';
import BigTerminal from './components/BigTerminal'; // (we will create this now)
import './App.css';

const App = () => {
  const [step, setStep] = useState('landing'); // 'landing' → 'smallTerminal' → 'bigTerminal'

  const handleBeginJourney = () => {
    setStep('smallTerminal');
  };

  const handleTerminalComplete = () => {
    setStep('bigTerminal');
  };

  return (
    <div className="app-container relative">
      {step === 'landing' && <LandingPage onBeginJourney={handleBeginJourney} />}
      {step === 'smallTerminal' && <SmallTerminal onComplete={handleTerminalComplete} />}
      {step === 'bigTerminal' && <BigTerminal />}
    </div>
  );
};

export default App;
