import React from "react";
import "./Downloads.css";
import { BrowserDownload } from "../BrowserDownload/BrowserDownload";
import firefoxIcon from "../../../images/logo-firefox.svg";
import operaIcon from "../../../images/logo-opera.svg";
import chromeIcon from "../../../images/logo-chrome.svg";

const Downloads = () => {
  return (
    <div className="Downloads--outer-container">
      <div className="Downloads--text-container">
        <h3 className="Downloads--heading">Download the extension</h3>
        <p className="Downloads--description">
          We've got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
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
    </div>
  );
};

export { Downloads };
