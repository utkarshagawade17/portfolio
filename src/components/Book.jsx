import React from 'react';
import { motion } from 'framer-motion';
import AboutMeScroll from './AboutMeScroll';
import MagicShelf from './MagicShelf';
import Projects from './Projects';

const Book = () => {
  const bookVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, x: 500, transition: { duration: 0.5 } },
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start pt-16 bg-black"
      style={{ backgroundImage: "url('/images/parchment-texture.jpg')", backgroundSize: 'cover' }}
      variants={bookVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Page 1: About Me */}
      <motion.section
        className="py-8 px-4 max-w-4xl mx-auto"
        variants={pageVariants}
      >
        <AboutMeScroll />
      </motion.section>

      {/* Page 2: Skills */}
      <motion.section
        className="py-8 px-4 max-w-4xl mx-auto"
        variants={pageVariants}
      >
        <MagicShelf />
      </motion.section>

      {/* Page 3: Projects */}
      <motion.section
        className="py-8 px-4 max-w-4xl mx-auto"
        variants={pageVariants}
      >
        <Projects />
      </motion.section>
    </motion.div>
  );
};

export default Book;
