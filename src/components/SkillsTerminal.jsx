import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend Magic", list: ["React.js ⚛️", "Tailwind CSS 🎨", "JavaScript ✨", "HTML5 🧡", "CSS3 🎨"] },
  { category: "Backend Spells", list: ["Node.js 🚀", "Express.js 🛠️", "MongoDB 🍃"] },
  { category: "Design Charms", list: ["Figma 🎨", "Photoshop 🖼️"] },
  { category: "Cloud and APIs", list: ["AWS ☁️", "OpenAI API 🤖"] },
];

export default function SkillsTerminal() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video src="/backgroundvideo.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />

      {/* Soft Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Skills Terminal */}
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
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-3xl">
          {/* Mac buttons */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* Drag Me */}
          <div className="text-green-400 text-xs font-mono animate-bounce select-none">
            ✨ Drag Me ✨
          </div>
        </div>

        {/* Title */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse select-none">
          📜 Utkarsha's Magical Skills Scroll
        </div>

        {/* Skills Scroll Content */}
        <div className="flex flex-col items-start space-y-6 px-8 py-6 w-full max-w-[700px] mx-auto">

          <div className="text-green-400 font-mono mb-6 text-lg animate-pulse">
            📜 Unrolling Ancient Scroll...
          </div>

          {skills.map((section, idx) => (
            <div key={idx} className="w-full">
              <div className="text-pink-400 font-bold text-xl mb-2">{section.category}:</div>
              <ul className="space-y-1">
                {section.list.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-blue-300 text-md font-mono"
                  >
                    - {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-8 text-green-400 font-mono text-center w-full animate-pulse">
            📖 Scroll Complete ✅
          </div>

        </div>

      </motion.div>

    </div>
  );
}
