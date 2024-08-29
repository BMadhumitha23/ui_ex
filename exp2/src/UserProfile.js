import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
    const { name, age, email, bio, avatar } = props;

    return (
        <div className="profile-container">
            <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
            <h1 className="profile-name">{name}</h1>
            <p className="profile-age"><strong>Age:</strong> {age}</p>
            <p className="profile-email"><strong>Email:</strong> {email}</p>
            <p className="profile-bio"><strong>Bio:</strong> {bio}</p>
        </div>
    );
};

export default UserProfile;
