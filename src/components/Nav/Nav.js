import React, { useState } from "react";
import "./Nav.css";
import darkLogo from "../../../images/logo-bookmark-dark.svg";
import whiteLogo from "../../../images/logo-bookmark-white.svg";
import hamburgerIcon from "../../../images/icon-hamburger.svg";
import { RedButton } from "../TextButton/RedButton";
import twitterLogo from "../../../images/icon-twitter.svg";
import facebookLogo from "../../../images/icon-facebook.svg";
import closeIcon from "../../../images/icon-close.svg";
import cx from "classnames";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = (e) => {
    setIsOpen(true);
    // consider refactoring this to use a context
    document.querySelector("main").style.filter = "blur(1px)";
    document.querySelector("html").style.overflowY = "hidden";
  };

  const handleCloseClick = (e) => {
    setIsOpen(false);
    // consider refactoring this to use a context
    document.querySelector("main").style.filter = "none";
    document.querySelector("html").style.overflowY = "scroll";
  };

  return (
    <div className="Nav--outer-container">
      <div
        id="Nav--container"
        className={cx("Nav--container", {
          "Nav--hidden": isOpen,
        })}
      >
        <a className="Nav--logo" href="#">
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
          <RedButton text="LOGIN" />
        </div>
      </div>

      <div
        id="Nav--mobile-links-container"
        className={cx("Nav--mobile-links-container", {
          "Nav--hidden": !isOpen,
        })}
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
