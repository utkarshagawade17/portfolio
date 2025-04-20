import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Magical Portfolio Website",
    tech: "React.js, Tailwind CSS, Framer Motion",
    liveLink: "https://your-magical-portfolio.com",
    emoji: "✨",
    color: "bg-pink-100",
  },
  {
    title: "AI Blog Generator",
    tech: "Node.js, Express, OpenAI API",
    liveLink: "https://your-ai-blog-generator.com",
    emoji: "📚",
    color: "bg-yellow-100",
  },
  {
    title: "UI/UX Design Showcase",
    tech: "Figma, Adobe XD",
    liveLink: "https://your-uiux-showcase.com",
    emoji: "🎨",
    color: "bg-purple-100",
  },
  {
    title: "E-commerce App",
    tech: "React, Redux, Firebase",
    liveLink: "https://your-ecommerce-app.com",
    emoji: "🛒",
    color: "bg-green-100",
  },
  {
    title: "Prompt to Media Generator",
    tech: "React, Node.js, Stable Diffusion",
    liveLink: "https://your-prompt-media-generator.com",
    emoji: "🔮",
    color: "bg-blue-100",
  },
  {
    title: "Travel Explorer App",
    tech: "Next.js, Tailwind, Mapbox",
    liveLink: "https://your-travel-explorer.com",
    emoji: "🌎",
    color: "bg-orange-100",
  },
];

export default function BigTerminal() {
  const [currentPage, setCurrentPage] = useState(0);
  const terminalRef = useRef(null);

  const handleNext = () => {
    setCurrentPage((prev) => {
      const nextPage = (prev + 1) % projects.length;

      if (nextPage === 0) {
        setTimeout(() => {
          if (terminalRef.current) {
            terminalRef.current.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
          }
        }, 600);
      }

      return nextPage;
    });
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, []);

  const project = projects[currentPage];

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

      {/* Soft Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Draggable Terminal */}
      <motion.div
        ref={terminalRef}
        drag
        dragConstraints={false}
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.02 }}
        initial={{ x: 0, y: 0 }}
        className="relative z-10 flex flex-col w-[90%] max-w-[1000px] h-[90vh] bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 resize overflow-y-auto cursor-grab active:cursor-grabbing"
      >

        {/* Drag Me Floating Magical Tag */}
        <div className="absolute top-3 right-4 text-xs text-pink-300 bg-white/10 px-3 py-1 rounded-full shadow-lg animate-bounce select-none">
          ✨ Drag Me ✨
        </div>

        {/* Mac Top Bar */}
        <div className="flex items-center bg-gray-800 px-4 py-3 space-x-2 rounded-t-3xl">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Title */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse select-none">
          Utkarsha's Magical Spellbook 📖✨
        </div>

        {/* Spellbook Flipping */}
        <div className="flex flex-col items-center justify-center space-y-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className={`p-8 w-[600px] h-[400px] flex flex-col items-center justify-center text-center shadow-2xl rounded-2xl ${project.color}`}
            >
              <div className="text-6xl mb-3">{project.emoji}</div>
              <div className="text-2xl font-bold mb-2 text-gray-800">{project.title}</div>
              <div className="text-md text-gray-600 mb-6">{project.tech}</div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-pink-200 text-gray-800 rounded-full hover:bg-pink-300 transition text-md"
              >
                View Live 🚀
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex space-x-8">
            <button
              onClick={handlePrevious}
              className="px-6 py-2 bg-blue-200 text-gray-800 rounded-full hover:bg-blue-300 transition text-md"
            >
              ◀ Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-green-200 text-gray-800 rounded-full hover:bg-green-300 transition text-md"
            >
              Next ▶
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mx-8 my-6"></div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-[280px] h-[220px] flex flex-col items-center justify-center text-center shadow-2xl rounded-2xl ${project.color} p-4`}
            >
              <div className="text-4xl mb-2">{project.emoji}</div>
              <div className="text-lg font-bold text-gray-800 mb-1">{project.title}</div>
              <div className="text-sm text-gray-600 mb-3">{project.tech}</div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-200 text-gray-800 rounded-full hover:bg-pink-300 transition text-sm"
              >
                View Live 🚀
              </a>
            </motion.div>
          ))}

        </div>

        {/* Go to Skills */}
        <div className="flex justify-center pb-10">
          <button
            onClick={() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-green-200 hover:bg-green-300 text-gray-800 rounded-full font-bold text-lg transition"
          >
            Go to Skills 🚀
          </button>
        </div>

      </motion.div>
    </div>
  );
}
