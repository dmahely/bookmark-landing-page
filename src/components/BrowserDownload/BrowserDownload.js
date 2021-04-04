import React from 'react';
import './BrowserDownload.css';
import { TextButton } from '../TextButton/TextButton';
import divider from '../../../images/bg-dots.svg';

const BrowserDownload = ({browser, minVersion, icon}) => {
    return (<div className="Download--container">
        <img className="Download--logo" alt={browser} src={icon} />
        <span className="Download--description">Add to {browser}</span>
        <span className="Download--min-version">Minimum version {minVersion}</span>
        <img className="Download--divider" src={divider} alt="Divider" />
        <TextButton size="l" backgroundColor="purple" color="white" text="Add & Install Extension"/>

    </div>)
}

export { BrowserDownload };