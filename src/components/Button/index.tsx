import React from "react";
import { IButton } from "./types";
import clsx from "clsx";
import "./styles.scss";

const Button = ({
  children,
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
      default:
        return "primary-button";
    }
  };

  return (
    <button
      className={clsx(className, getStyleType())}
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
