import React from 'react';
import '../../index.css';

const ShortsCategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const shortsCategory = ['All', 'Islam', 'Fitness', 'Cricket'];

  return (
    <div className="category-bar">
      {shortsCategory.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)} // Update category selection
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ShortsCategoryBar;
