import React from 'react';
import "./ProjectCard.css";

function ProjectCard({ title, duration, work1, work2,github_link }) {
  return (
    <div className="project-card">
      {/* <div className={`${className}`}> */}
        <h2>{title}</h2>
        <p>{duration}</p>
        <ul>
          <li>{work1}</li>
          <li>{work2}</li>
        </ul>
        <a href= {github_link} target='_blank' rel="noreferrer">github</a>
      {/* </div> */}
    </div>
  )
}

export default ProjectCard