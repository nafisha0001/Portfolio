import React from 'react';
import './CertificateCard.css';

function CertificateCard({ title, institution, credential, className }) {
  return (
    <div className="certificate-card">
      <div className={`${className}`}>
        <h2>{title}</h2>
        <p>{institution}</p>
        <a id='certificate-credential' href={credential} target="_blank" rel="noreferrer">Credential</a>
      </div>
    </div>
  )
}

export default CertificateCard;