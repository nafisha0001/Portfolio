import React from 'react';
import './EducationCard.css'

function EducationCard({ title, institution, year, marks }) {
  return (
    <div className="education-card">
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{year}</p>
        <p>{marks}</p>
    </div>
  );
}

export default EducationCard;
