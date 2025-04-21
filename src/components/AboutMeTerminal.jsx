import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMeTerminal({ onGoToExperience }) {
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
        className="relative z-10 flex flex-col w-[90%] max-w-[1000px] h-[90vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 resize overflow-y-auto cursor-grab active:cursor-grabbing"
      >
        {/* Mac Header */}
        <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2 rounded-t-3xl">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* About Me Content */}
        <div className="flex flex-col items-center justify-center flex-grow p-10 text-center text-white space-y-8">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-pink-400 font-bold tracking-wide">
            🌸 About Utkarsha
          </h1>

          {/* About Me Text */}
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed font-mono">
            Hi, I'm <span className="text-green-300 font-bold">Utkarsha</span> — a frontend dreamer and fullstack explorer ✨.
            My passion lies in blending creativity with technology to craft experiences that are intuitive, accessible, and magical.
            I'm deeply driven by curiosity, empathy, and a commitment to continuous growth.
          </p>

          {/* Education Title */}
          <h2 className="text-3xl text-green-400 font-bold mt-8 mb-4 flex items-center">
            🎓 Education
          </h2>

          {/* Education Cards */}
          <div className="flex flex-col space-y-6 w-full max-w-3xl">
            <div className="bg-black/70 border border-gray-600 rounded-2xl p-6 shadow-xl">
              <h3 className="text-yellow-300 text-xl font-bold font-sans">Master of Science in Computer Science</h3>
              <p className="italic text-gray-400 mt-2 font-sans">Illinois Institute of Technology</p>
              <p className="text-gray-400 font-sans">Illinois, USA | Expected May 2025</p>
            </div>
            <div className="bg-black/70 border border-gray-600 rounded-2xl p-6 shadow-xl">
              <h3 className="text-yellow-300 text-xl font-bold font-sans">Bachelor of Technology in Computer Engineering</h3>
              <p className="italic text-gray-400 mt-2 font-sans">Savitribai Phule Pune University</p>
              <p className="text-gray-400 font-sans">Maharashtra, India | June 2023</p>
            </div>
          </div>

          {/* Button to Go to Experience */}
          <button
            onClick={onGoToExperience}
            className="mt-10 bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-3 px-8 rounded-full text-lg flex items-center space-x-2 transition"
          >
            🚀 Go to Experience
          </button>

        </div>
      </motion.div>
    </div>
  );
}
