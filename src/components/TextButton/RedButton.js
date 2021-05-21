import React from "react";
import "./TextButton.css";

const RedButton = ({ text, onClick }) => {
  return (
    <button className="TextButton--button RedButton--button" onClick={onClick}>
      {text}
    </button>
  );
};

export { RedButton };
