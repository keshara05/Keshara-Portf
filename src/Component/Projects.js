import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "project1.jpg",
    demoLink: "https://project1.com",
    githubLink: "https://github.com/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "project2.jpg",
    demoLink: "https://project2.com",
    githubLink: "https://github.com/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "project3.jpg",
    demoLink: "https://project3.com",
    githubLink: "https://github.com/project3",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={require(`../img/${project.image}`)}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
