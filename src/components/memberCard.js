import React from 'react';
import gatorImage from './Images/Gators Logo.png';

const MemberCard = (props) => {
    const  member  = props.member;

    return(
        <div className="member-box">
            <div className="member-image">
                <img src={gatorImage} alt="" />
            </div>
            <div className="member-info">
                <h2>
                    {member.name}
                </h2>
                <h3>
                {member.position}
            </h3>
            </div>
        </div>
    )
};

export default MemberCard;