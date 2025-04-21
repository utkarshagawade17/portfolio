import React from 'react';
import { motion } from 'framer-motion';

export default function ContactTerminal({ onBackToSkills }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        src="/backgroundvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Soft Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Terminal Window */}
      <motion.div
        drag
        dragConstraints={false}
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.02 }}
        initial={{ x: 0, y: 0 }}
        className="relative z-10 flex flex-col w-[90%] max-w-[700px] h-[90vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 resize overflow-y-auto cursor-grab active:cursor-grabbing"
      >

        {/* Back Arrow */}
        <button 
          onClick={onBackToSkills} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 hover:text-pink-300 transition-all duration-300 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Mac Top Bar */}
        <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2 rounded-t-3xl">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Heading */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse select-none">
          📬 Contact Me
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center px-8 space-y-6 mt-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/60 rounded-xl p-6 border border-gray-600 w-full max-w-md text-center"
          >
            <p className="text-white text-lg font-semibold">Email Me</p>
            <a href="mailto:ugawade@hawk.iit.edu" className="text-pink-300 hover:text-pink-400 transition-all">
              ugawade@hawk.iit.edu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/60 rounded-xl p-6 border border-gray-600 w-full max-w-md text-center"
          >
            <p className="text-white text-lg font-semibold">LinkedIn</p>
            <a href="https://linkedin.com/in/utkarsha-gawade17" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400 transition-all">
              linkedin.com/in/utkarsha-gawade17
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/60 rounded-xl p-6 border border-gray-600 w-full max-w-md text-center"
          >
            <p className="text-white text-lg font-semibold">GitHub</p>
            <a href="https://github.com/Utkarsha-Gawade" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400 transition-all">
              github.com/Utkarsha-Gawade
            </a>
          </motion.div>

        </div>

        {/* Final Message */}
        <div className="text-green-400 font-mono text-center mt-10 animate-pulse">
          🚀 Let's connect and build something magical!
        </div>

      </motion.div>
    </div>
  );
}
