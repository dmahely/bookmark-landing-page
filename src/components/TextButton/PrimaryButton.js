import React from "react";
import "./TextButton.css";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      className="TextButton--button PrimaryButton--button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { PrimaryButton };
