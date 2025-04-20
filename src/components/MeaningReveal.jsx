import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MeaningReveal = () => {
  const name = "Utkarsha";
  const emoji = "👩🏻‍💻";
  const translations = [
    "成長", // Japanese
    "विकास", // Hindi
    "Développement", // French
    "Desarrollo", // Spanish
    "التنمية", // Arabic
    "🌱 Becoming ✨", // Final - now part of the translations
  ];

  const [translationIndex, setTranslationIndex] = useState(0);
  const cycleIntervalMs = 2000;
  const fadeDurationSec = 0.6; // Corrected variable name

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslationIndex(prevIndex => (prevIndex + 1) % translations.length);
    }, cycleIntervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white flex items-baseline">
        {`Hi, I’m ${name}`}
        <span className="inline-block ml-2 md:ml-3">{emoji}</span>
      </h1>

      <div className="relative text-xl md:text-2xl font-semibold min-h-[2.5rem] w-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={translationIndex}
            className={`absolute inset-0 flex items-center justify-center ${translationIndex === translations.length - 1 ? "text-yellow-300 shimmer-text" : "text-white"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: fadeDurationSec }} // Corrected variable name
          >
            {name} ⇌ {translations[translationIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MeaningReveal;
