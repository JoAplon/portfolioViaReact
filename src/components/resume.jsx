import React from "react";
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p className="resumeText">Download my <a href="#" download>resume</a></p>
                <h3 className="frontHeading">Front-end Proficiencies:</h3><br />
                <div className="frontEnd">
                        - HTML<br />
                        - CSS<br />
                        -JavaScript<br />
                        - responsive design<br />
                        - React<br />
                        - Bootstrap<br />
                </div>

                <h3 className="backHeading"> Back-end Proficiencies:</h3><br />
                <div className="backEnd">
        
                        - API's<br />
                        - Node<br />
                        - Express<br />
                        - MySQL, Sequelize<br />
                        - MongoDB, Mongoose<br />
                        - REST<br />
                        - GraphQL<br />
                
                </div>
    
        </div>
    );
}

export default Resume;