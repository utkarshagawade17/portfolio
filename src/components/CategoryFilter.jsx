import React from 'react';

// Define category icons (using emojis for simplicity)
const categoryIcons = {
  All: '🌟',
  Frontend: '🌐',
  Fullstack: '⚙️',
  'UI/UX': '🖌️',
  APIs: '⚡',
};

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            px-5 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110
            flex items-center space-x-2
            ${
              selectedCategory === category
                ? 'bg-yellow-200 text-black shadow-lg scale-105' // Active style
                : 'bg-black/30 backdrop-blur-sm text-white hover:bg-black/50' // Inactive style
            }
          `}
        >
          <span>{categoryIcons[category] || '📁'}</span>
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
