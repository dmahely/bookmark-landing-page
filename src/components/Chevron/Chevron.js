import React from "react";
import "./Chevron.css";
import cx from "classnames";

const Chevron = ({ isActive }) => {
  const stroke = isActive ? "var(--soft-red)" : "var(--soft-blue)";
  return (
    <svg
      className={cx("Chevron--icon", {
        "Chevron-icon--active": isActive,
      })}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
    >
      <path fill="none" stroke={stroke} strokeWidth="3" d="M1 1l8 8 8-8" />
    </svg>
  );
};

export { Chevron };
