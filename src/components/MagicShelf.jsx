import React from 'react';
import { motion } from 'framer-motion';

const MagicShelf = () => {
  const skills = [
    { name: "React", emoji: "🌀" },
    { name: "TypeScript", emoji: "🛠" },
    { name: "Figma", emoji: "🎨" },
    { name: "Tailwind CSS", emoji: "🧩" },
    { name: "HTML5 + CSS3", emoji: "🌐" },
    { name: "Node.js", emoji: "⚙️" },
    { name: "Jest", emoji: "🧪" },
    { name: "Firebase", emoji: "☁️" },
    { name: "Git & GitHub", emoji: "🎯" },
    { name: "Framer Motion", emoji: "✨" },
  ];

  const shelfVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 mx-auto max-w-5xl"
      variants={shelfVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-handwritten text-center text-white mb-8">
          ✨ My Magical Skills ✨
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/40 hover:bg-black/50 transition duration-300 hover:scale-110 text-white"
              variants={skillVariants}
              whileHover="hover"
            >
              <span className="text-3xl mb-2">{skill.emoji}</span>
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MagicShelf;
