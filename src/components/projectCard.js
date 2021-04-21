import React from 'react';
import gatorImage from './Images/Gators Logo.png';
import "./projectCard.css"

export default class ProjectCard extends React.Component
{
    render() {
        return (
            <div className="project-box">
                <div className="project-title">
                    <h2>{this.props.project.title}</h2>
                </div>
                <ul className="project-content">
                    <li className="project-image">
                        <img src={gatorImage} alt="" />
                    </li>
                    <li className="project-data">
                        <div className="project-info">
                            <text>{this.props.project.description}</text>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}