import React from 'react';
import './Certification.css';
import CertificateCard from '../components/CertificateCard';

function Certification() {
  const certificateData = [
    {
      title: 'Foundations of Cybersecurity',
      institution: 'Google',
      credential: 'https://www.coursera.org/account/accomplishments/records/9XK8GWW87Q4Q'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification ',
      institution: 'DeepLearning.AI',
      credential: 'https://www.coursera.org/account/accomplishments/records/3678FXN30AXI'
    },
    {
      title: 'Machine Learning with Python',
      institution: 'IBM',
      credential: 'https://www.coursera.org/account/accomplishments/records/3L9NS73CWW96'
    },
    {
      title: 'The Complete Flutter Development with Dart',
      institution: 'Udemy',
      credential: 'https://www.udemy.com/certificate/UC-de3614a5-e206-4fb0-8ea1-bf3082b3ebc1/'
    },
    {
      title: 'Front-End Web Development',
      institution: 'Devsnest',
      credential: 'https://devsnest.in/certificate/ECH86xARXzE'
    },
    {
      title: 'Google UX Design Specialization',
      institution: 'Google',
      credential: 'https://www.coursera.org/account/accomplishments/specialization/S23GRRK7T8UJ'
    }
  ];

  return (
    <div className='parent-certification-container'>
      <div className='certification-card-container'>
        {certificateData.map((certificate, index) => (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
          >
            <CertificateCard
              className={`card ${index % 2 === 0 ? 'card-left-align' : 'card-right-align'}`}
              title={certificate.title}
              institution={certificate.institution}
              credential={certificate.credential}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
