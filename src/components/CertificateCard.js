import React from 'react';
import './CertificateCard.css';

function CertificateCard({ title, institution, credential }) {
  return (
    <div className="certificate-card">
        <h2>{title}</h2>
        <p>{institution}</p>
        <a id='certificate-credential' href={credential} target="_blank" rel="noreferrer">Credential</a>
    </div>
  )
}

export default CertificateCard;