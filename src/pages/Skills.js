import React from 'react';
import './Skills.css';
import SkillCard from '../components/SkillCard'; 

function Skills() {
    const skills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'React' },
        { name: 'C' },
        { name: 'Python' },
        { name: 'Flutter' },
        { name: 'Machine Learning' },
        { name: 'SQL' },
        { name: 'GitHub' },
        { name: 'UX/UI' },
        { name: 'Prompt Engineering' },
        { name: 'JavaScript' }
    ];

    return (
        <div className='Skill-container'>
            <div className='Skills'>
                {skills.map(skill => (
                    <SkillCard key={skill.name} skillName={skill.name} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
