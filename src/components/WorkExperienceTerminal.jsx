import React from 'react';
import { motion } from 'framer-motion';

export default function WorkExperienceTerminal({ onBackToAboutMe, onGoToProjects }) {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Global Payments",
      period: "May 2024 – Aug 2024",
      description: [
        "Developed pixel-perfect, reusable UI components using React.js and Tailwind CSS.",
        "Focused on accessibility improvements (WCAG standards), improving Lighthouse scores.",
        "Collaborated with UX teams to ensure design consistency.",
        "Participated in Agile ceremonies and rapid prototyping."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "WorqHat",
      period: "Aug 2022 – Jun 2023",
      description: [
        "Built end-to-end web applications using React, Node.js, and MongoDB.",
        "Designed activity logs and integrated real-time data workflows.",
        "Developed an Activity Log System featuring data visualizations to enhance user insight and engagement.",
        "Led UX design for an Emotion Detection System, conducting user research, wireframing, and usability testing to validate design decisions."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Excellerate",
      period: "June 2023 – July 2023",
      description: [
        "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on large datasets.",
        "Built predictive machine learning models to support business decision-making.",
        "Collaborated with cross-functional teams to derive actionable insights from data.",
        "Presented analytical reports and visualizations using Python libraries (Pandas, Matplotlib, Seaborn)."
      ]
    }
  ];

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

        {/* Arrows */}
        {/* Left Arrow */}
        <button 
          onClick={onBackToAboutMe}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={onGoToProjects}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-30 p-2 rounded-full transition z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-pink-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mac Header */}
        <div className="flex items-center bg-gray-800 px-4 py-2 space-x-2 rounded-t-3xl">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
         
        </div>

        {/* Title */}
        <div className="text-4xl md:text-5xl text-green-300 text-center py-6 font-bold tracking-wide animate-pulse select-none">
          💼 Work Experience
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col space-y-8 px-6 py-6 w-full max-w-[800px] mx-auto">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black border border-gray-600 rounded-2xl shadow-lg p-6 space-y-3"
            >
              <div className="text-blue-300 font-mono font-bold text-2xl">{exp.title}</div>
              <div className="text-pink-300 font text-lg">{exp.company}</div>
              <div className="text-green-300 text-lg">{exp.period}</div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside font-mono text-white text-sm leading-relaxed mt-2 space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}
