import React, { Fragment } from "react";
import "./Header.css";
import darkLogo from "../../../images/logo-bookmark-dark.svg";
import whiteLogo from "../../../images/logo-bookmark-white.svg";
import hamburgerIcon from "../../../images/icon-hamburger.svg";
import { TextButton } from "../TextButton/TextButton";
import twitterLogo from "../../../images/icon-twitter.svg";
import facebookLogo from "../../../images/icon-facebook.svg";
import closeIcon from "../../../images/icon-close.svg";

const Header = () => {
  const handleHamburgerClick = (e) => {
    document.getElementById("Header--container").style.display = "none";
    document.getElementById("Header--mobile-links-container").style.display =
      "block";
  };

  const handleCloseClick = (e) => {
    document.getElementById("Header--container").style.display = "flex";
    document.getElementById("Header--mobile-links-container").style.display =
      "none";
  };

  return (
    <div className="Header--outer-container">
      <div id="Header--container" className="Header--container">
        <a href="#">
          <img src={darkLogo} alt="Bookmark logo" />
        </a>
        <a
          className="Header--hamburger-icon"
          onClick={handleHamburgerClick}
          href="#"
        >
          <img src={hamburgerIcon} alt="Hamburger icon" />
        </a>

        <div className="Header--links-container">
          <a href="#" className="Header--link">
            Features
          </a>
          <a href="#" className="Header--link">
            Pricing
          </a>
          <a href="#" className="Header--link">
            Contact
          </a>
          <TextButton
            text="LOGIN"
            color="white"
            backgroundColor="red"
            size="s"
          />
        </div>
      </div>

      <div
        id="Header--mobile-links-container"
        className="Header--mobile-links-container"
      >
        <div className="Header--mobile-top-container">
          <a href="#">
            <img src={whiteLogo} alt="Bookmark logo" />
          </a>
          <a href="#" onClick={handleCloseClick}>
            <img src={closeIcon} alt="Close" />
          </a>
        </div>
        <hr />
        <a href="#" className="Header--mobile-link">
          Features
        </a>
        <hr />
        <a href="#" className="Header--mobile-link">
          Pricing
        </a>
        <hr />
        <a href="#" className="Header--mobile-link">
          Contact
        </a>
        <hr />
        <button id="Header--mobile-login">Login</button>
        <div className="Header--icon-container">
          <a href="#">
            <img
              className="Header--icon"
              src={facebookLogo}
              alt="Facebook logo"
            />
          </a>
          <a href="#">
            <img
              className="Header--icon"
              src={twitterLogo}
              alt="Twitter logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Header };
