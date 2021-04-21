import React from 'react';
import gatorImage from './Images/Gators Logo.png';

const ProjectCard = (props) => {
    const  project  = props.project;

    return(
        <div className="project-box">
            <div className="project-image">
                <img src={gatorImage} alt="" />
            </div>
            <div className="project-info">
                <h2>
                    {project.title}
                </h2>
                <h3>
                    {project.description}
                </h3>
            </div>
        </div>
    )
};

export default ProjectCard;