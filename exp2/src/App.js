import React, { useState } from 'react';
import UserProfile from './UserProfile';
import './App.css'; // Make sure to include the CSS file

const App = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        bio: '',
        avatar: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Enter Your Profile Details</h2>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={user.age}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio:</label>
                        <textarea
                            name="bio"
                            value={user.bio}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Avatar URL:</label>
                        <input
                            type="text"
                            name="avatar"
                            value={user.avatar}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>

            <UserProfile
                name={user.name}
                age={user.age}
                email={user.email}
                bio={user.bio}
                avatar={user.avatar}
            />
        </div>
    );
};

export default App;
