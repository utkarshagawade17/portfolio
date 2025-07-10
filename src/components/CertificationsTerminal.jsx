import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Google UX Design Certificate 🎨",
    organization: "Google Career Certificates",
    year: "2025",
    description: "Completed Google's comprehensive UX Design Certificate with an outstanding 86.86% average across 7 specialized courses. This program transformed my approach to problem-solving by teaching me to empathize with users, conduct meaningful research, and create accessible designs. The hands-on experience with Figma, usability testing, and end-to-end project development prepared me to design user-centered solutions that make a real impact.",
    skills: [
      "User-Centered Design",
      "UX Research & Usability Testing", 
      "Figma & Prototyping",
      "Wireframing & Storyboarding",
      "Accessibility & Equity Design",
      "Data Ethics & Web Guidelines"
    ],
    courses: [
      { name: "Foundations of UX Design", grade: "98.48%" },
      { name: "UX Design Process: Empathize, Define, Ideate", grade: "86.87%" },
      { name: "Build Wireframes & Low-Fidelity Prototypes", grade: "85.02%" },
      { name: "Conduct UX Research & Test Early Concepts", grade: "87.50%" },
      { name: "Create High-Fidelity Designs in Figma", grade: "86.77%" },
      { name: "Build Dynamic User Interfaces for Websites", grade: "87.70%" },
      { name: "Design UX for Social Good & Job Preparation", grade: "83.70%" }
    ],
    avgGrade: "86.86%",
    projects: "3 End-to-End Portfolio Projects",
    verificationLink: "https://coursera.org/share/79afbc254bf743b692d74aed58e90d2a",
    badge: "🏆"
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
        <div className="flex flex-col items-center justify-center space-y-8 px-6 py-6 w-full max-w-[900px] mx-auto flex-grow">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/90 border border-gray-600 rounded-2xl shadow-lg p-8 space-y-6 w-full text-center max-w-2xl"
            >
              {/* Certificate Title & Badge */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-5xl">{cert.badge}</span>
                <div className="text-pink-300 text-4xl font-bold font-sans">{cert.title}</div>
              </div>
              
              {/* Organization & Year */}
              <div className="space-y-2">
                <div className="text-gray-300 text-2xl font-medium font-sans">{cert.organization}</div>
                <div className="text-green-400 text-xl font-medium font-sans">{cert.year}</div>
              </div>

              {/* Description */}
              <div className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto font-sans">
                {cert.description}
              </div>

              {/* Impact & Learning Summary */}
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 px-6 py-4 rounded-lg space-y-4">
                <div className="text-yellow-300 text-xl font-semibold font-sans">How This Certification Helped Me:</div>
                <div className="text-gray-200 text-base space-y-3 font-sans">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1 text-lg">✓</span>
                    <span className="font-medium"><strong className="font-bold">User-First Mindset:</strong> Learned to prioritize user needs over assumptions, leading to more effective design solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1 text-lg">✓</span>
                    <span className="font-medium"><strong className="font-bold">Research Skills:</strong> Gained expertise in conducting interviews, usability studies, and synthesizing data into actionable insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1 text-lg">✓</span>
                    <span className="font-medium"><strong className="font-bold">Design Process Mastery:</strong> Now follow a structured approach from empathy to iteration, ensuring thorough and thoughtful design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1 text-lg">✓</span>
                    <span className="font-medium"><strong className="font-bold">Accessibility Advocate:</strong> Equipped to create inclusive designs that serve diverse users and promote equity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1 text-lg">✓</span>
                    <span className="font-medium"><strong className="font-bold">Professional Portfolio:</strong> Built end-to-end projects that demonstrate real-world problem-solving capabilities</span>
                  </div>
                </div>
              </div>

              {/* Skills Learned */}
              <div className="space-y-4">
                <div className="text-pink-300 text-xl font-semibold font-sans">Key Skills Acquired:</div>
                <div className="grid grid-cols-2 gap-3 text-base">
                  {cert.skills.map((skill, idx) => (
                    <div key={idx} className="bg-gray-800 px-4 py-3 rounded-lg text-blue-300 font-medium font-sans">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Completion with Grades */}
              <div className="space-y-4">
                <div className="text-pink-300 text-xl font-semibold font-sans">Course Completion Record:</div>
                <div className="grid grid-cols-1 gap-3 text-base max-h-64 overflow-y-auto">
                  {cert.courses.map((course, idx) => (
                    <div key={idx} className="bg-gray-800 px-5 py-4 rounded-lg flex justify-between items-center">
                      <span className="text-gray-200 text-left flex-1 font-medium font-sans">{course.name}</span>
                      <span className="text-green-400 font-bold ml-4 text-lg font-mono">{course.grade}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-800 to-blue-800 px-5 py-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg font-sans">Overall Average Grade:</span>
                    <span className="text-yellow-400 font-bold text-2xl font-mono">{cert.avgGrade}</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="bg-gray-800 px-5 py-4 rounded-lg">
                <span className="text-yellow-400 font-semibold text-lg font-sans">Portfolio Projects: </span>
                <span className="text-gray-200 text-lg font-medium font-sans">{cert.projects}</span>
              </div>

              {/* Verification Link */}
              <div className="pt-4">
                <a 
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors font-semibold text-lg font-sans"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verify Certificate</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </div>
  );
}