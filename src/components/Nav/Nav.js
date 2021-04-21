import React from "react";
import "./Nav.css";
import darkLogo from "../../../images/logo-bookmark-dark.svg";
import whiteLogo from "../../../images/logo-bookmark-white.svg";
import hamburgerIcon from "../../../images/icon-hamburger.svg";
import { TextButton } from "../TextButton/TextButton";
import twitterLogo from "../../../images/icon-twitter.svg";
import facebookLogo from "../../../images/icon-facebook.svg";
import closeIcon from "../../../images/icon-close.svg";

const Nav = () => {
  /* Refactor to use predefined classes */
  const handleHamburgerClick = (e) => {
    document.getElementById("Nav--container").style.visibility = "hidden";
    document.getElementById("Nav--mobile-links-container").style.display =
      "flex";
    // consider refactoring this to use a context
    document.querySelector("main").style.filter = "blur(1px)";
    document.querySelector("html").style.overflowY = "hidden";
  };

  const handleCloseClick = (e) => {
    document.getElementById("Nav--container").style.visibility = "visible";
    document.getElementById("Nav--mobile-links-container").style.display =
      "none";
    // consider refactoring this to use a context
    document.querySelector("main").style.filter = "none";
    document.querySelector("html").style.overflowY = "scroll";
  };

  return (
    <div className="Nav--outer-container">
      <div id="Nav--container" className="Nav--container">
        <a href="#">
          <img src={darkLogo} alt="Bookmark logo" />
        </a>
        <a
          className="Nav--hamburger-icon"
          onClick={handleHamburgerClick}
          href="#"
        >
          <img src={hamburgerIcon} alt="Hamburger icon" />
        </a>

        <div className="Nav--links-container">
          <a href="#" className="Nav--link">
            Features
          </a>
          <a href="#" className="Nav--link">
            Pricing
          </a>
          <a href="#" className="Nav--link">
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
        id="Nav--mobile-links-container"
        className="Nav--mobile-links-container"
      >
        <div className="Nav--mobile-top-container">
          <a href="#">
            <img src={whiteLogo} alt="Bookmark logo" />
          </a>
          <a href="#" onClick={handleCloseClick}>
            <img src={closeIcon} alt="Close" />
          </a>
        </div>
        <div className="Nav--mobile-links">
          <hr />
          <a href="#" className="Nav--mobile-link">
            Features
          </a>
          <hr />
          <a href="#" className="Nav--mobile-link">
            Pricing
          </a>
          <hr />
          <a href="#" className="Nav--mobile-link">
            Contact
          </a>
          <hr />
          <button id="Nav--mobile-login">Login</button>
        </div>
        <div className="Nav--icon-container">
          <a href="#">
            <img className="Nav--icon" src={facebookLogo} alt="Facebook logo" />
          </a>
          <a href="#">
            <img className="Nav--icon" src={twitterLogo} alt="Twitter logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Nav };
