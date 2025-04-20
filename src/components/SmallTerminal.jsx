import React, { useState, useEffect } from 'react';

const loadingPhrases = [
  "Connecting to Utkarsha's Portfolio...",
  "Fetching projects...",
  "Compiling skills...",
  "Loading experiences...",
  "Preparing magical journey...",
  "Done ✅"
];

export const SmallTerminal = ({ onComplete }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (currentPhrase < loadingPhrases.length) {
      const timeout = setTimeout(() => {
        setCurrentPhrase(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    } else {
      const completionTimeout = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 1000);
      return () => clearTimeout(completionTimeout);
    }
  }, [currentPhrase, onComplete]);

  return (
    <div className="flex flex-col w-[400px] bg-black/90 rounded-xl shadow-2xl border border-gray-700 overflow-hidden mx-auto mt-40">

      {/* Mac Header */}
      <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal Content */}
      <div className="flex flex-col bg-black text-green-400 font-mono text-md px-6 py-4 space-y-2 min-h-[300px]">
        {loadingPhrases.slice(0, currentPhrase).map((phrase, idx) => (
          <div key={idx} className="whitespace-pre">{"> "}{phrase}</div>
        ))}
      </div>

    </div>
  );
};
