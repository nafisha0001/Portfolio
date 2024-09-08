import React from 'react';
import EducationCard from '../components/EducationCard'; 
import './Education.css'
// import EU from '../Images/EU.jpeg'
// import MST from '../Images/MST.jpg'
// import PSEB from '../Images/PSEB.jpeg'
// import GSSSH from '../Images/GSSSH.jpeg'

function Education() {
  const educationData = [
    {
      title: 'B Tech (CSE)',
      institution: 'Eternal University',
      year: '2021-2025',
      marks: '9.03 OCPA till 6th sem'
    //   image: EU 
    },
    {
      title: 'Secondary Education',
      institution: 'Sr. Sec. Residential School for Meritorious Students Patiala',
      year: '2019-2021',
      marks:'97.8%'
    //   image: MST
    },
    {
      title: 'High School',
      institution: 'Govt. Sr. Sec. School Harpalput (Patiala)',
      year: '2028-2019',
      marks: '93.23%'
    //   image: GSSSH
    }
  ];

  return (
    <div className="card-container">
      {educationData.map((data, index) => (
        <EducationCard
          key={index}
          title={data.title}
          institution={data.institution}
          year={data.year}
          marks={data.marks}
        />
      ))}
    </div>
  );
}

export default Education;
