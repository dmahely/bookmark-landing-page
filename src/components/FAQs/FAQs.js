import React from "react";
import { FAQ } from "../FAQ/FAQ";
import "./FAQs.css";
import { TextButton } from "../TextButton/TextButton";

const FAQs = () => {
  return (
    <div className="FAQ--outer-container">
      <h3 className="FAQ--heading">Frequently Asked Questions</h3>
      <p className="FAQ--description">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="FAQ--questions-container">
        <FAQ
          num="1"
          question="What is Bookmark?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis."
        />
        <hr />

        <FAQ
          num="2"
          question="How can I request a new browser?"
          answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet."
        />
        <hr />

        <FAQ
          num="3"
          question="Is there a mobile app?"
          answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum."
        />
        <hr />

        <FAQ
          num="4"
          question="What about other Chromium browsers?"
          answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit."
        />
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

export { FAQs };
