import React from "react";
import "./Feature.css";

const Feature = ({ heading, image, description, id, state }) => {
  return (
    <div className={`Feature--container Feature--container-${state}`} id={id}>
      <div className="Feature--inner-container">
        <div className="Feature--image-container">
          <img className="Feature--image" src={image} alt={heading} />
          <div className="Feature--shape"></div>
        </div>
        <h3 className="Feature--heading">{heading}</h3>
        <p className="Feature--description">{description}</p>
      </div>
    </div>
  );
};

export { Feature };
