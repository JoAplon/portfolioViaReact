import React from "react";
import { Link } from 'react-router-dom';
import Navigation from './nav';

function Header() {
    return (
        <header >
            <h1>Jordan Aplon</h1>
            <Navigation />
        </header>
    );
}

export default Header;