import React from 'react';
import "./projectCard.css"

export default class ProjectCard extends React.Component
{
    render() {
        let imagesrc = '../project-images/' + this.props.project.imageName;

        return (
            <div className="project-box">
                <div className="project-title">
                    <h2>{this.props.project.title}</h2>
                </div>
                <ul className="project-content">
                    <li className="project-image">
                        <img src={imagesrc} alt="" />
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