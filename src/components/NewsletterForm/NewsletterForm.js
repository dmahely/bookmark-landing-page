import React, { useRef, useState } from "react";
import "./NewsletterForm.css";
import { RedButton } from "../TextButton/RedButton";
import errorIcon from "../../../images/icon-error.svg";
import cx from "classnames";

const NewsletterForm = () => {
  const emailInput = useRef(null);
  const [isValidInput, setIsValidInput] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = emailInput.current.value.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );

    isValidEmail ? setIsValidInput(true) : setIsValidInput(false);
  };

  return (
    <div className="Newsletter--container">
      <span className="Newsletter--heading">35,000+ already joined</span>
      <span className="Newsletter--description">
        Stay up-to-date with what we're doing
      </span>
      <form>
        <div
          className={cx("Newsletter--input-container", {
            "Newsletter--input-container-wrong": !isValidInput,
          })}
        >
          <input
            required
            className="Newsletter--input"
            placeholder="Enter your email address"
            ref={emailInput}
          />
          <img
            src={errorIcon}
            alt="Error icon"
            className={cx("Newsletter--wrong-icon", {
              "Newsletter--inactive": isValidInput,
            })}
          />
          <p
            className={cx("Newsletter--wrong-input", {
              "Newsletter--inactive": isValidInput,
            })}
          >
            Whoops, make sure it's an email
          </p>
        </div>
        <RedButton text="Contact Us" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export { NewsletterForm };
