import React from 'react';
import './SkillCard.css'; 
function SkillCard({skillName }) {
    return (
        <div className="skillCard">
            <div className="skill-name">{skillName}</div>
        </div>
    );
}

export default SkillCard;