import React, { useState } from "react";
import "./FAQ.css";
import { Chevron } from "../Chevron/Chevron";
import cx from "classnames";

const FAQ = ({ question, answer, num }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="FAQ--question-container">
      <a
        id={`FAQ--question-${num}`}
        className="FAQ--question-heading"
        onClick={handleTabClick}
      >
        <h3 className="FAQ--question">
          {question}
          <Chevron isActive={isOpen} />
        </h3>
      </a>
      <p
        className={cx("FAQ--answer", `FAQ--answer-${num}`, {
          "FAQ--hidden": !isOpen,
        })}
      >
        {answer}
      </p>
    </div>
  );
};

export { FAQ };
