import React from 'react';

const projects = [
  {
    title: "✨ Magical Portfolio Website",
    tech: "React.js, Tailwind CSS, Framer Motion",
  },
  {
    title: "📚 AI Blog Generator",
    tech: "Node.js, Express, OpenAI API",
  },
  {
    title: "🎨 UI/UX Design Showcase",
    tech: "Figma, Adobe XD",
  },
  {
    title: "🛒 E-commerce App",
    tech: "React, Redux, Firebase",
  },
  {
    title: "🔮 Prompt to Media Generator",
    tech: "React, Node.js, Stable Diffusion",
  },
  {
    title: "🌎 Travel Explorer App",
    tech: "Next.js, Tailwind, Mapbox",
  },
];

export default function BigTerminal() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black/60 p-6 rounded-lg shadow-md border border-green-500">
            <div className="text-2xl mb-2">{"> "}{project.title}</div>
            <div className="text-md text-green-300">{project.tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
