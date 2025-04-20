import React from 'react';

const ProjectCard = ({ title, description, techStack, liveLink, codeLink }) => {
  return (
    // Apply glassmorphism, rounded corners, hover effects, and transition
    <div className="bg-black/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl border border-white/10">
      <div className="p-6">
        {/* Keep title bold, adjust text color for better contrast on blurred background if needed */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {/* Adjust text color for readability */}
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="mb-4">
          {/* Apply new tech stack tag styling */}
          {techStack.map((tech, index) => (
            <span key={index} className="inline-block bg-green-700/60 text-white px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-3">
          {/* Update button background colors, keep other styles */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
