import React from 'react';

const ProjectCard = ({ title, description, techStack, liveLink, codeLink }) => {
  return (
    <div className="bg-black/70 backdrop-blur-md font-sans rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:rotate-[1deg] border border-white/10 hover:border-pink-400 group">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-pastel-peach text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 justify-end">
          
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-pastel-blue hover:bg-blue-400 text-black font-semibold py-2 px-4 rounded-full transition transform hover:-translate-y-1"
          >
            🛠 Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
