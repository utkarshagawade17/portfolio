import React, { useEffect, useState } from 'react';

const rotatingTexts = [
  "Crafting frontend magic ✨",
  "Full-stack dreams 🚀",
  "UI/UX enchantment 🎨"
];

export default function LandingPage({ onBeginJourney }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setShowSparkles(true);
    setTimeout(() => {
      setShowSparkles(false);
      onBeginJourney();
    }, 800); 
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video
        src="/backgroundvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="font-bold text-4xl md:text-6xl drop-shadow-lg mb-6">
          Hi, I'm Utkarsha 👩🏻‍💻
        </h1>

        <p className="text-lg md:text-2xl font-semibold mb-8 animate-fadeIn">
          {rotatingTexts[currentTextIndex]}
        </p>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handleButtonClick}
            className="bg-pink-200 hover:bg-pink-300 text-black px-8 py-4 rounded-full shadow-2xl font-bold hover:scale-110 transition-all duration-500 max-w-[240px] border-2 border-pink-300 animate-bounce"
          >
            Begin the Journey 🚀
          </button>

          {showSparkles && (
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-pink-300/30 animate-ping"></div>
              <div className="w-16 h-16 rounded-full bg-yellow-200/30 animate-ping absolute"></div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
