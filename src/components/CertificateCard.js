import React from 'react';
import './CertificateCard.css';

function CertificateCard({ title, institution, year, marks }) {
  return (
    <div className="certificate-card">
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{year}</p>
        <p>{marks}</p>
    </div>
  )
}

export default CertificateCard;