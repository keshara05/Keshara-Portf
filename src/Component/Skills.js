import React from 'react';
import './Skills.css';

// Importing images from the src/img folder
import htmlIcon from '../img/html-icon.png';
import cssIcon from '../img/css-icon.png';
import jsIcon from '../img/js-icon.png';
import reactIcon from '../img/react-icon.png';

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: htmlIcon,
      title: 'HTML',
      description:
        'I create well-structured and semantic HTML5 code to form the foundation of web pages, ensuring accessibility and SEO optimization.',
      level: '90%',
    },
    {
      id: 2,
      icon: cssIcon,
      title: 'CSS',
      description:
        'I design responsive, modern, and beautiful layouts using CSS3, ensuring that websites look great on all other devices.',
      level: '85%',
    },
    {
      id: 3,
      icon: jsIcon,
      title: 'JavaScript',
      description:
        'I bring interactivity to websites with JavaScript, focusing on functionality, DOM manipulation, and performance optimization.',
      level: '80%',
    },
    {
      id: 4,
      icon: reactIcon,
      title: 'React.js',
      description:
        'I build dynamic, high-performance user interfaces with React.js, leveraging its components and hooks for modular code.',
      level: '75%',
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.title} />
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
                title={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
