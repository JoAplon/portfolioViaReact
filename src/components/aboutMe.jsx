import React from "react";
import { Link } from 'react-router-dom';
import Navigation from './nav';

function AboutMe() {
    return (
        <div>
            <h2 className="aboutMe">About Me</h2>
            <div className="textAboutMe">
            {/* <img src="#" alt="Picture of me!" /> */}
            <p>
                I started out pretty far from the tech community. I was working at a dog boarding facility in Austin, Texas since I was planning on becoming a Veterinarian. 
                After working there a couple years I was told by my cousin, she works in cybersecurity for the Army, how interesting coding can be. I started doing some reasearch in my free time and
                that led to me making the career change. I started the Irvine Bootcamp in February of 2024 and haven't stopped practicing my skills since. I'd love to see where this takes me and who I get to meet in this industry.
                I've had the pleasure of a great instructor and I can't wait to get out there and show off what I've learned. This has all been very exciting!

            </p>
            </div>
        </div>
    );
}

export default AboutMe;