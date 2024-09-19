import React from 'react';
import './EducationCard.css'

function EducationCard({ title, institution, year, marks }) {
  return (
    <div className="education-card">
        <h2>{title}</h2>
        <p>{institution}</p>
        <p>{year}</p>
        <p>{marks}</p>
    </div>
  );
}

export default EducationCard;
