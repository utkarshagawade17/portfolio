import React, { useState, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';
import projects from '../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projectsWrapperRef = useRef(null);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(p => p.category))];
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <motion.section
      ref={projectsWrapperRef}
      id="projects"
      className="py-24 px-4 bg-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-4xl text-white font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          ✨ My Projects ✨
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </motion.div>

        <motion.div layout className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  liveLink={project.liveLink}
                  codeLink={project.codeLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
