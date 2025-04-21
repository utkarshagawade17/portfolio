import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner ☁️",
    organization: "Amazon Web Services",
    year: "2024"
  },
  {
    title: "Meta Front-End Developer Certification 💻",
    organization: "Coursera | Meta",
    year: "2024"
  },
  {
    title: "Google Data Analytics Certification 📊",
    organization: "Google",
    year: "2023"
  },
  {
    title: "Responsive Web Design 🖥️",
    organization: "freeCodeCamp",
    year: "2023"
  },
  {
    title: "Machine Learning with Python 🤖",
    organization: "IBM",
    year: "2022"
  }
];

export default function CertificationsTerminal({ onBackToSkills, onGoToContact }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video src="/backgroundvideo.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />

      {/* Soft Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Certifications Terminal */}
      <motion.div
        drag
        dragConstraints={false}
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.02 }}
        initial={{ x: 0, y: 0 }}
        className="relative z-10 flex flex-col w-[90%] max-w-[1000px] h-[90vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 resize overflow-y-auto cursor-grab active:cursor-grabbing"
      >

        {/* Left Arrow */}
        <button
          onClick={onBackToSkills}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={onGoToContact}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mac Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-3xl">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-auto text-green-400 text-xs font-mono animate-bounce select-none">
            ✨ Drag Me ✨
          </div>
        </div>

        {/* Title */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse select-none">
          📜 Certifications & Achievements
        </div>

        {/* Certifications List */}
        <div className="flex flex-col items-center space-y-8 px-6 py-6 w-full max-w-[800px] mx-auto">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black border border-gray-600 rounded-2xl shadow-lg p-6 space-y-2 w-full text-center"
            >
              <div className="text-pink-300 text-2xl font-bold font-sans">{cert.title}</div>
              <div className="text-gray-300 text-lg font-sans">{cert.organization}</div>
              <div className="text-green-400 text-sm font-sans">{cert.year}</div>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </div>
  );
}
