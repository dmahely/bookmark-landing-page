import React, { useRef } from "react";
import "./NewsletterForm.css";
import { TextButton } from "../TextButton/TextButton";
import errorIcon from "../../../images/icon-error.svg";

const NewsletterForm = () => {
  const emailInput = useRef(null);

  const handleWrongInput = (e) => {
    e.preventDefault();
    const isValidEmail = emailInput.current.value.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
    if (!isValidEmail || isValidEmail === null) {
      document
        .querySelector(".Newsletter--input-container")
        .classList.add("wrong");

      document
        .querySelectorAll(".inactive")
        .forEach((el) => el.classList.remove("inactive"));
    }
  };

  return (
    <div className="Newsletter--container">
      <span className="Newsletter--heading">35,000+ already joined</span>
      <span className="Newsletter--description">
        Stay up-to-date with what we're doing
      </span>
      <form>
        <div className="Newsletter--input-container">
          <input
            required
            className="Newsletter--input"
            placeholder="Enter your email address"
            ref={emailInput}
          />
          <img
            src={errorIcon}
            alt="Error icon"
            className="Newsletter--wrong-icon inactive"
          />
          <p className="Newsletter--wrong-input inactive">
            Whoops, make sure it's an email
          </p>
        </div>
        <TextButton
          text="Contact Us"
          color="white"
          size="l"
          backgroundColor="red"
          onClick={handleWrongInput}
        />
      </form>
    </div>
  );
};

export { NewsletterForm };
