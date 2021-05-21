import React from "react";
import { SecondaryButton } from "../TextButton/SecondaryButton";
import { PrimaryButton } from "../TextButton/PrimaryButton";
import "./Hero.css";
import heroImage from "../../../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="Hero--container">
      <div className="Hero--image-container">
        <img className="Hero--image" src={heroImage} alt="Hero image" />
        <div className="Hero--shape"></div>
      </div>
      <div className="Hero--text-container">
        <h1 className="Hero--heading">A Simple Bookmark Manager</h1>
        <p className="Hero--description">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="Hero--buttons-container">
          <PrimaryButton text="Get it on Chrome" />
          <SecondaryButton text="Get it on Firefox" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
