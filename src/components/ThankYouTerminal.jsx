import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYouTerminal({ onRestartJourney }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video src="/backgroundvideo.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />

      {/* Soft Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Terminal */}
      <motion.div
        drag
        dragConstraints={false}
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.02 }}
        initial={{ x: 0, y: 0 }}
        className="relative z-10 flex flex-col items-center justify-center w-[90%] max-w-[800px] h-[85vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 cursor-grab active:cursor-grabbing"
      >

        {/* Mac Header */}
        <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2 rounded-t-3xl absolute top-0 left-0 w-full">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Main Thank You Content */}
        <div className="flex flex-col items-center justify-center flex-grow px-8 pt-24 space-y-8 text-center">

          {/* Big Thank You */}
          <h1 className="text-4xl md:text-5xl text-pink-400 font-bold animate-pulse tracking-wide">
            🎀 Thank You for Visiting!
          </h1>

          {/* Sub Text */}
          <p className="text-green-300 text-lg font-mono">
            I hope you enjoyed exploring Utkarsha's Magical Portfolio ✨
          </p>

          <p className="text-gray-300 text-md font-mono">
            Feel free to connect with me anytime! 💌
          </p>

          {/* Restart Button */}
          <button
            onClick={onRestartJourney}
            className="mt-8 px-8 py-3 bg-green-300 hover:bg-green-400 text-black font-bold rounded-full transition text-lg"
          >
            🔁 Start Again
          </button>

        </div>

        {/* Footer */}
        <div className="text-gray-400 text-sm font-mono pb-6 select-none">
          Made with ❤️ by Utkarsha
        </div>

      </motion.div>

    </div>
  );
}
