import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { title: 'Project One', description: 'Description here', link: '#' },
  { title: 'Project Two', description: 'Description here', link: '#' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
