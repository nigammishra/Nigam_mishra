import React, { useState } from 'react';
import './work.css'; // Import the custom CSS file

const ProjectFilter = ({ categories, onFilterChange }) => {
  // State to keep track of the active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Function to handle filter click
  const handleFilterClick = (category) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="project-filter">
      <ul className="project-filter-list">
        <li
          className={`filter ${activeFilter === 'all' ? 'filter-active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`filter ${activeFilter === category ? 'filter-active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilter;
