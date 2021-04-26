import React from "react";
import "./FAQ.css";
import { TextButton } from "../TextButton/TextButton";
import inactiveChevronIcon from "../../../images/icon-arrow.svg";
import activeChevronIcon from "../../../images/icon-arrow-active.svg";

const FAQ = () => {
  let chevronIcon = inactiveChevronIcon;
  const handleTabClick = (e) => {
    // TODO: change the chevron icon for the active faq

    const faqNumber = e.currentTarget.id.slice(-1);
    const answerId = `.FAQ--answer-${faqNumber}`;

    // if the answer clicked is already active
    const isActive = document
      .querySelector(answerId)
      .classList.contains("FAQ--active");
    if (isActive) {
      document.querySelector(answerId).classList.add("FAQ--hidden");
      document.querySelector(answerId).classList.remove("FAQ--active");
      console.log(document.querySelector(answerId).classList);
    } else {
      document.querySelector(answerId).classList.add("FAQ--active");
      document.querySelector(answerId).classList.remove("FAQ--hidden");
    }

    // if an answer is clicked while another answer is active
    const isOnly =
      document.querySelectorAll(".FAQ--active").length <= 1 ? true : false;

    if (!isOnly) {
      Array.from(document.querySelectorAll(".FAQ--active")).forEach((el) => {
        el.classList.remove("FAQ--active");
        el.classList.add("FAQ--hidden");
      });
      document.querySelector(answerId).classList.add("FAQ--active");
      document.querySelector(answerId).classList.remove("FAQ--hidden");
    }
  };
  return (
    <div className="FAQ--outer-container">
      <h3 className="FAQ--heading">Frequently Asked Questions</h3>
      <p className="FAQ--description">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      {/* <!-- Questions --> */}
      <div className="FAQ--questions-container">
        <div className="FAQ--question-container">
          <a
            id="FAQ--question-1"
            className="FAQ--question-heading"
            onClick={handleTabClick}
          >
            <h3 className="FAQ--question">
              What is Bookmark?
              <img src={chevronIcon} alt="Chevron icon" />
            </h3>
          </a>
          <p className="FAQ--answer FAQ--hidden FAQ--answer-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <hr />

        <div className="FAQ--question-container">
          <a
            id="FAQ--question-2"
            className="FAQ--question-heading"
            onClick={handleTabClick}
          >
            <h3 className="FAQ--question">
              How can I request a new browser?
              <img src={chevronIcon} alt="Chevron icon" />
            </h3>
          </a>
          <p className="FAQ--answer FAQ--hidden FAQ--answer-2">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <hr />

        <div className="FAQ--question-container">
          <a
            id="FAQ--question-3"
            className="FAQ--question-heading"
            onClick={handleTabClick}
          >
            <h3 className="FAQ--question">
              Is there a mobile app?
              <img src={chevronIcon} alt="Chevron icon" />
            </h3>
          </a>
          <p className="FAQ--answer FAQ--hidden FAQ--answer-3">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        <hr />

        <div className="FAQ--question-container">
          <a
            id="FAQ--question-4"
            className="FAQ--question-heading"
            onClick={handleTabClick}
          >
            <h3 className="FAQ--question">
              What about other Chromium browsers?
              <img src={chevronIcon} alt="Chevron icon" />
            </h3>
          </a>
          <p className="FAQ--answer FAQ--hidden FAQ--answer-4">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
        <hr />
      </div>
      <TextButton
        text="More Info"
        size="s"
        backgroundColor="purple"
        color="white"
      />
    </div>
  );
};

export { FAQ };
