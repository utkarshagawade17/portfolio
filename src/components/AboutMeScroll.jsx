import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "Illinois Institute of Technology",
    location: "Illinois, USA",
    graduation: "Expected May 2025",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    university: "Savitribai Phule Pune University",
    location: "Maharashtra, India",
    graduation: "June 2023",
  },
];

export default function AboutMeScroll() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

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
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-black/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700 p-10 max-w-3xl mx-auto text-center text-white space-y-12"
      >

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green-300 animate-pulse">
            🌸 About Me
          </h1>
          <p className="text-lg text-gray-300">
            Hi, I'm Utkarsha! A passionate creator blending code, design, and storytelling to build magical digital experiences.
            Driven by curiosity, empathy, and innovation, I believe that technology should feel human — intuitive, accessible, and enchanting.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-pink-300 animate-pulse">
            🎓 Education
          </h2>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-black/60 rounded-xl p-6 border border-gray-700 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-yellow-300">{edu.degree}</h3>
              <p className="mt-2 text-white">{edu.university}</p>
              <p className="text-gray-400">{edu.location} | {edu.graduation}</p>
            </motion.div>
          ))}
        </div>

        {/* Ending Note */}
        <div className="pt-6 text-green-400 font-mono animate-pulse">
          Let's create something magical together! ✨
        </div>

      </motion.div>

    </section>
  );
}
