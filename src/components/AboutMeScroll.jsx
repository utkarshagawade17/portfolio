import React from 'react';
import { motion } from 'framer-motion';

const AboutMeScroll = () => {
  const milestones = [
    { emoji: "💡", title: "The Spark", story: "Wrote my first line of code in high school and never looked back." },
    { emoji: "🎨", title: "Design Meets Logic", story: "Fell in love with UI/UX — the perfect blend of art and structure." },
    { emoji: "🚀", title: "Projects with Purpose", story: "Built tools that help people — from an AI blog generator to frontend apps with emotion." },
    { emoji: "🎓", title: "Mastering the Craft", story: "Currently pursuing my Master’s in CS at Illinois Tech — creating with curiosity and code." },
    { emoji: "🧙‍♀️", title: "What I Seek", story: "To craft digital experiences that feel like stories — immersive, accessible, and human." },
  ];

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const milestoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 mx-auto max-w-4xl"
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-handwritten text-center text-white mb-8">
          📜 About Me 📜
        </h2>
        <div className="flex flex-col space-y-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              variants={milestoneVariants}
            >
              <div className="text-2xl text-yellow-200">{milestone.emoji}</div>
              <div>
                <h3 className="text-xl font-handwritten text-white">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMeScroll;
