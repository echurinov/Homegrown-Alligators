import React from 'react';
import "./memberCard.css"

export default class MemberCard extends React.Component
{   

    render() {
        let imagesrc = '../member-images/' + this.props.member.imageName;

        return (
            <div className="member-box">
                <div className="member-content">
                    <div className="member-image">
                        <img src={imagesrc} alt="" /> 
                    </div>
                    <div className="member-info">
                        <div className="member-name">
                            <p>{this.props.member.name}</p>
                        </div>
                        <div className="member-role">
                            <p>{this.props.member.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}