import React from "react";
import { Link } from 'react-router-dom';
import Navigation from './nav';

function Footer() {
    return (
        <div className="Footer">
        <footer>
            <a href="https://github.com/JoAplon">
                <img src="https://img.icons8.com/ios-filled/50/github.png" alt="Github Logo" />    
            </a>              
        </footer>
        </div>
    );
}

export default Footer;