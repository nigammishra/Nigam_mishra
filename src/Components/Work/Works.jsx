import React, { useState } from 'react';
import ProjectFilter from './ProjectFilter'; // Import the ProjectFilter component
import './work.css'; // Import the custom CSS file
import projectData from './data.js'; // Import the project data

const ProjectItem = ({ project }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className={`project-grid-box ${project.category}`}>
      <div className="project-single-item">
        <img
          src={project.image}
          alt={project.imgAlt}
          className="project-image img-fluid"
        />
        <div className="project-img-overlay">
          <div className="project-content">
            <div className="info">
              <p>{project.infoText}</p>
              <h6>{project.title}</h6>
            </div>
            <a href={project.link} className="popimg">
              <span className="icon">
                <i className="fa fa-file-image"></i>
              </span>
            </a>
            <div className="project-buttons mt-2">
              <a href={project.detailsLink} className="project-btn btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                View Details
              </a>
              <a href={project.siteLink} className="project-btn btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectContainer = ({ projects }) => (
  <div className="row">
    {projects.map((project) => (
      <ProjectItem key={project.id} project={project} />
    ))}
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['WebTemplete', 'FullStackProject', 'AnimatedPortfolio'];

  const handleFilterChange = (selectedCategory) => {
    setFilter(selectedCategory);
  };

  const filteredProjects = filter === 'all'
    ? projectData
    : projectData.filter((project) => project.category === filter);

  return (
    <div className="projects-section">
      <ProjectFilter categories={categories} onFilterChange={handleFilterChange} />
      <div className="container">
        <ProjectContainer projects={filteredProjects} />
      </div>
    </div>
  );
};

export default Projects;
