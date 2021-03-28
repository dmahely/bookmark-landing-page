import React from 'react';
import './Footer.css';
import logo from '../../../images/logo-bookmark-light.svg';
import twitterLogo from '../../../images/icon-twitter.svg';
import facebookLogo from '../../../images/icon-facebook.svg';

const Footer = () => {
    return (
    <div className="Footer--container">
        <img className="Footer--logo" src={logo} alt="Bookmark logo" />
        <a href="#" className="Footer--link">Features</a>
        <a href="#" className="Footer--link">Pricing</a>
        <a href="#" className="Footer--link">Contact</a>

        <div className="Footer--icon-container">
            <img className="Footer--icon" src={facebookLogo} alt="Facebook logo" />
            <img className="Footer--icon" src={twitterLogo} alt="Twitter logo" />
        </div>
    </div>);
};

export { Footer };