import React from 'react';
import { motion } from 'framer-motion';

export default function WorkExperienceTerminal({ onBackToAboutMe, onGoToProjects }) {
  const experiences = [
  {
    title: "Software Engineer",
    company: "Global Payments",
    period: "June 2024 – May 2025",
    description: [
      "Developed React.js apps using TypeScript with optimized, reusable components and responsive layouts.",
      "Improved accessibility and performance (30% faster load times, 25% boost in user satisfaction).",
      "Integrated Redux and RESTful APIs to streamline frontend-backend data flow.",
      "Authored unit/integration tests with Jest, raising coverage from 60% to 90% and reducing bugs.",
      "Automated CI/CD pipelines using GitHub Actions to cut deploy time by 50%."
    ]
  },
  {
    title: "Software Engineer",
    company: "Wells Fargo",
    period: "July 2021 – June 2023",
    description: [
      "Built Spring Boot microservices and REST APIs handling 50,000+ daily transactions at 99.9% uptime.",
      "Optimized batch jobs and Hibernate mappings, reducing processing time by 30%.",
      "Designed and tuned Oracle PL/SQL schemas and Java persistence layers.",
      "Improved Java test coverage with JUnit/Mockito by 35% and cut production incidents significantly.",
      "Led CI/CD automation using Jenkins and Maven for fast, error-free deployments."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "WorqHat",
    period: "September 2019 – June 2021",
    description: [
      "Built Spring Boot APIs and Node.js services with React.js frontends for real-time insights.",
      "Designed responsive UIs with Tailwind CSS and Bootstrap, improving accessibility and speed.",
      "Created Emotion Detection and Activity Log features with sub-1s latency and 40% higher engagement.",
      "Dockerized apps and integrated into Jenkins CI/CD pipelines for early and stable releases.",
      "Reduced user-reported bugs by 50% through cross-browser QA and early testing."
    ]
  },
  {
    title: "Data Science Intern",
    company: "Excellerate",
    period: "June 2023 – July 2023",
    description: [
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on large datasets.",
      "Built machine learning models for prediction and classification using Python (scikit-learn, pandas).",
      "Created visual reports using Matplotlib and Seaborn to communicate insights effectively.",
      "Collaborated with cross-functional teams to turn data into actionable business decisions."
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
              <div className="text-pink-300 font text-lg font-sans">{exp.company}</div>
              <div className="text-green-300 text-lg font-sans">{exp.period}</div>

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
