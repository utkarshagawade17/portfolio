import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Magical Portfolio Website",
    description: "An animated portfolio showcasing magical UI journey.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://your-portfolio-link.com",
    codeLink: "https://github.com/yourrepo/portfolio",
  },
  {
    title: "AI Blog Generator",
    description: "Generated blog posts using OpenAI API and Node.js backend.",
    techStack: ["Node.js", "Express.js", "OpenAI API"],
    liveLink: "https://your-ai-blog.com",
    codeLink: "https://github.com/yourrepo/aiblog",
  },
  {
    title: "Travel Explorer App",
    description: "Explore new places using Mapbox, Next.js and Firebase.",
    techStack: ["Next.js", "Mapbox", "Firebase"],
    liveLink: "https://your-travel-explorer.com",
    codeLink: "https://github.com/yourrepo/travelexplorer",
  },
];

export default function BigTerminal({ onBackToExperience, onGoToSkills }) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (current < projects.length) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden font-sans">

      {/* Background */}
      <video src="/backgroundvideo.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Terminal */}
      <motion.div
        drag
        dragElastic={0.2}
        whileDrag={{ scale: 1.02 }}
        className="relative z-10 flex flex-col w-[90%] max-w-[1000px] h-[90vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 overflow-hidden cursor-grab active:cursor-grabbing"
      >

        {/* Arrows */}
        <button onClick={onBackToExperience} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition group z-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={onGoToSkills} disabled={current < projects.length} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition group z-50">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${current === projects.length ? 'text-white group-hover:text-pink-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-t-3xl">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 ml-2 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 ml-2 rounded-full"></div>
          <div className="ml-auto text-green-400 text-xs font-mono animate-bounce pr-4 select-none">
            ✨ Drag Me ✨
          </div>
        </div>

        {/* Title */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse">
          Projects 📖✨
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center flex-grow overflow-y-auto p-6">

          <AnimatePresence mode="wait">
            {current < projects.length ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <ProjectCard {...projects[current]} />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex-grow overflow-y-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex space-x-8 mt-8">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="px-6 py-2 bg-pastel-blue hover:bg-blue-300 text-black font-bold rounded-full transition disabled:opacity-30"
            >
              ◀ Previous
            </button>
            <button
              onClick={handleNext}
              disabled={current === projects.length}
              className="px-6 py-2 bg-pastel-green hover:bg-green-300 text-black font-bold rounded-full transition disabled:opacity-30"
            >
              {current === projects.length - 1 ? 'View All Projects' : current === projects.length ? 'Go to Skills ▶' : 'Next ▶'}
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
