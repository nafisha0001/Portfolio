import React from 'react';
import './Responsibility.css';
import ResponsibilityCard from '../components/ResponsibilityCard';

function Responsibility() {
  const responsibilityData = [
    {
      title: 'Core and Active Member',
      institution: 'Coding & Hackathon Club, Eternal University',
      duration: '03/2024 - Present',
      work: 'Organized two successful hackathons for all B.Tech students across various semesters',
    },
    {
      title: 'Volunteer',
      institution: 'Techshilla, Baru Sahib',
      duration: '12/2023 - Present',
      work: 'Conducted UX design workshops for students from two schools',
    }
  ];

  return (
    <div className='parent-responsibility-container'>
      <div className='responsibility-card-container'>
        {responsibilityData.map((data, index) => (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
          >
            <ResponsibilityCard
            className={`card ${index % 2 === 0 ? 'card-left-align' : 'card-right-align'}`}
              title={data.title}
              institution={data.institution}
              duration={data.duration}
              work={data.work}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Responsibility