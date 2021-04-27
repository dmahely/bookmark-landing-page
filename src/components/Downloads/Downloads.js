import React from "react";
import "./Downloads.css";
import { BrowserDownload } from "../BrowserDownload/BrowserDownload";
import firefoxIcon from "../../../images/logo-firefox.svg";
import operaIcon from "../../../images/logo-opera.svg";
import chromeIcon from "../../../images/logo-chrome.svg";

const Downloads = () => {
  return (
    <div className="Downloads--container">
      <BrowserDownload
        browser="Chrome"
        minVersion="62"
        icon={chromeIcon}
        num="1"
      />
      <BrowserDownload
        browser="Firefox"
        minVersion="55"
        icon={firefoxIcon}
        num="2"
      />
      <BrowserDownload
        browser="Opera"
        minVersion="46"
        icon={operaIcon}
        num="3"
      />
    </div>
  );
};

export { Downloads };
