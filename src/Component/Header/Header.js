import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <h1>SA Genarel Hospital</h1>
            </div>
            <div className = "link-style">
                <a href="/home">Home</a>
                <a href="/home">Service</a>
                <a href="/home">About us</a>
                <a href="/home">Contact us</a>
                
            </div>
        </div>
    );
};

export default Header;