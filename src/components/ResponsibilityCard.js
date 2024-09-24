import React from 'react';
import "./ResponsibilityCard.css";

function ResponsibilityCard({ title, institution, duration, work, className }) {
  return (
    <div className="reponsibility-card">
      <div className={`${className}`}>
        <h2>{title}</h2>
        <p>{institution}</p>
        <p>{duration}</p>
        <ul id='responsibility-work'>
          <li>{work}</li>
        </ul>
      </div>
    </div>
  )
}

export default ResponsibilityCard