import React from "react";
import "./TextButton.css";

const InfoButton = ({ text }) => {
  return (
    <button className="TextButton--button InfoButton--button">{text}</button>
  );
};

export { InfoButton };
