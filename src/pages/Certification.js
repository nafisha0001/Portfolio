import React from 'react';
import './Certification.css';
import CertificateCard from '../components/CertificateCard';

function Certification() {
  return (
    <div className='certification-container'>
        <CertificateCard 
          title='Cyber-Security'
          institution='xyz'
          year='2024'
          marks='234'
        />
        <CertificateCard 
          title='Cyber-Security'
          institution='xyz'
          year='2024'
          marks='234'
        />
    </div>
  )
}

export default Certification;