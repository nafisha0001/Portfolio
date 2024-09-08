import React from 'react';
import './EducationCard.css'

function EducationCard({ title, institution, year, marks }) {
  return (
    <div className="card">
      {/* <img src={image} alt={title} className="card-image"/> */}
      {/* <div className="card-info"> */}
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{year}</p>
        <p>{marks}</p>
      {/* </div> */}
    </div>
  );
}

export default EducationCard;
