import React from "react";
import "./TextButton.css";

const SecondaryButton = ({ text, onClick }) => {
  return (
    <button
      className="TextButton--button SecondaryButton--button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { SecondaryButton };
