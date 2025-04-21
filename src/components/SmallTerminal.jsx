import React, { useState, useEffect } from 'react';

export default function SmallTerminal({ onComplete }) {
  const loadingPhrases = [
    "Connecting to Utkarsha's Magical Portfolio...",
    "Fetching projects and skills...",
    "Compiling experiences...",
    "Almost ready...",
    "Ready! ✨"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (currentPhrase < loadingPhrases.length - 1) {
      const timeout = setTimeout(() => setCurrentPhrase(prev => prev + 1), 1500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentPhrase, onComplete]);

  return (
    <div className="flex flex-col w-[500px] bg-black/90 rounded-xl shadow-2xl border border-gray-700 overflow-hidden mx-auto mt-40">

      {/* Mac Header */}
      <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal Content */}
      <div className="flex flex-col bg-black text-green-400 font-mono text-md px-6 py-6 space-y-3 min-h-[300px]">
        {loadingPhrases.slice(0, currentPhrase + 1).map((phrase, idx) => (
          <div key={idx} className="whitespace-pre-wrap break-words">{"> "}{phrase}</div>
        ))}
      </div>

    </div>
  );
}
