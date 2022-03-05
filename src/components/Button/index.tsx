import React from "react";
import clsx from "clsx";

import { IButton } from "./types";
import "./styles.scss";

const Button = ({
  children,
  ariaLabel,
  onClick = () => {},
  disabled = false,
  className = "",
  id = "",
  type = "button",
  styleType = "primary",
}: IButton): JSX.Element => {
  const getStyleType = (): string => {
    switch (styleType) {
      case "primary":
        return "primary-button";
      case "danger":
        return "danger-button";
      case "clear":
        return "clear-button";
      case "success":
        return "success-button";
      default:
        return "primary-button";
    }
  };

  return (
    <button
      aria-label={ariaLabel}
      className={clsx(getStyleType(), className)}
      disabled={disabled}
      id={id}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
