import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactTerminal({ onBackToCertifications, onGoToThankYou }) {
  const [showTyping, setShowTyping] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
      setShowOptions(true);
    }, 3000); // 3 seconds typing animation

    return () => clearTimeout(timer);
  }, []);

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
        className="relative z-10 flex flex-col w-[90%] max-w-[800px] h-[85vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 overflow-y-auto cursor-grab active:cursor-grabbing"
      >

        {/* Left Arrow */}
        <button
          onClick={onBackToCertifications}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={onGoToThankYou}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mac Header */}
        <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2 rounded-t-3xl">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Chatbot Content */}
        <div className="flex flex-col justify-center items-center flex-grow px-8 py-10 font-mono text-green-300 space-y-6 text-lg">

          {/* Typing */}
          {showTyping ? (
            <div className="flex space-x-2">
              <span>Bot is typing</span>
              <div className="animate-ping w-2 h-2 bg-green-300 rounded-full"></div>
              <div className="animate-ping w-2 h-2 bg-green-300 rounded-full delay-150"></div>
              <div className="animate-ping w-2 h-2 bg-green-300 rounded-full delay-300"></div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              Hi, I'm <span className="text-pink-400 font-bold">Utkarsha's Bot 🤖</span> <br />
              How would you like to connect with her today? ✨
            </motion.div>
          )}

          {/* Options */}
          {showOptions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center space-y-6 mt-8"
            >
              <button
                onClick={() => window.open('mailto:utkarshagawade17@gmail.com')}
                className="hover:text-pink-400 text-white transition-all text-lg font-medium"
              >
                > 📧 Email
              </button>

              <button
                onClick={() => window.open('https://www.linkedin.com/in/utkarsha-gawade17/', '_blank')}
                className="hover:text-pink-400 text-white transition-all text-lg font-medium"
              >
                > 💼 LinkedIn
              </button>

              <button
                onClick={() => window.open('https://github.com/utkarshagawade17', '_blank')}
                className="hover:text-pink-400 text-white transition-all text-lg font-medium"
              >
                > 🐙 GitHub
              </button>
            </motion.div>
          )}

        </div>

      </motion.div>

    </div>
  );
}