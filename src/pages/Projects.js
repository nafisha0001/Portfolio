import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
    const projectData = [
        {
          "title": "Personal Portfolio",
          "duration": "Ongoing",
          "work1": "Personal digital portfolio showcasing skills and projects.",
          "work2": "Developed using various web technologies.",
          "github_link": "https://github.com/nafisha0001/Portfolio.git"
        },
        {
          "title": "Scholarship EU",
          "duration": "Completed",
          "work1": "Website designed using HTML, CSS, and JavaScript.",
          "work2": "Centralized scholarship data for university students.",
          "github_link": "https://github.com/nafisha0001/ScholarshipEU.git"
        },
        {
          "title": "Mental Health and Wellbeing",
          "duration": "Ongoing",
          "work1": "React project to help users find activities for mental health.",
          "work2": "Provides solutions and suggestions for mental well-being.",
          "github_link": "https://github.com/nafisha0001/mental_wellbeing.git"
        },
        {
          "title": "Kalgidhar Trust App",
          "duration": "Ongoing",
          "work1": "Flutter project offering detailed information on Kalgidhar Trust operations.",
          "work2": "Centralized platform for trust-related services.",
          "github_link": "https://github.com/nafisha0001/Kalgidhar-Trust.git"
        }
      ];

  return (
    <div className='parent-project-container'>
      <div className='project-card-container'>
        {projectData.map((data, index) => (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
          >
            <ProjectCard
            // className={`card ${index % 2 === 0 ? 'card-left-align' : 'card-right-align'}`}
              title={data.title}
              duration={data.duration}
              work1={data.work1}
              work2={data.work2}
              github_link={data.github_link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects