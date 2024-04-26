import React from "react";
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className="project-container">
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="firstProject">
                <a href="https://github.com/JoAplon/weatherAPIs.git" className="project-card" target="_blank" rel="noopener noreferrer">
                        <h3> Weather Search </h3>
                    </a>
                        <p>You can use this app to search the current weather and the next four days.</p>
                </div>

                <div className="secondProject">
                <a href="https://github.com/JoAplon/readme-generator.git" className="project-card" target="_blank" rel="noopener noreferrer"> 
                        <h3> README Generator </h3>
                    </a>
                        <p>This app can make a professional looking README in half the time it would take to manually type one.</p>
                </div>

                <div className="thirdProject">
                <a href="https://github.com/JoAplon/note-Taker.git" className="project-card" target="_blank" rel="noopener noreferrer">
                        <h3> Note Taker </h3>
                    </a>
                        <p>This app keeps track of all your chores or daily activities. You can mark when each are complete or delete them.</p>
                </div>

                <div className="fourthProject">
                <a href="https://github.com/JoAplon/socialNetwork-mongo.git" className="project-card" target="_blank" rel="noopener noreferrer">  
                <h3> Social Network CL </h3>     
                    </a>
                      <p>This CL app lets you create users, thoughts, reactions to thoughts, and friends all through CRUD routes!</p>
                </div>
            </div>
        </div>
    );
}

export default Project;