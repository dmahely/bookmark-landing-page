import React from 'react';
import { BrowserDownload } from '../BrowserDownload/BrowserDownload';
import firefoxIcon from '../../../images/logo-firefox.svg';
import operaIcon from '../../../images/logo-opera.svg';
import chromeIcon from '../../../images/logo-chrome.svg';


const Download = () => {
    return(
        <div>
        <BrowserDownload browser="Chrome" minVersion="62" icon={chromeIcon} />
        <BrowserDownload browser="Firefox" minVersion="55" icon={firefoxIcon} />
        <BrowserDownload browser="Opera" minVersion="46" icon={operaIcon} />
        </div>
    )

}

export { Download };