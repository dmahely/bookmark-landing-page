import React from "react";
import "./BrowserDownload.css";
import { PrimaryButton } from "../TextButton/PrimaryButton";
import divider from "../../../images/bg-dots.svg";

const BrowserDownload = ({ browser, minVersion, icon, num }) => {
  return (
    <div className="Download--container" id={`Download--container-${num}`}>
      <img className="Download--logo" alt={browser} src={icon} />
      <span className="Download--description">Add to {browser}</span>
      <span className="Download--min-version">
        Minimum version {minVersion}
      </span>
      <img className="Download--divider" src={divider} alt="Divider" />
      <PrimaryButton text="Add & Install Extension" />
    </div>
  );
};

export { BrowserDownload };
