import React from "react";
import { ISpinner } from "./types";
import "./styles.scss";

const Spinner = ({ label = "" }: ISpinner): JSX.Element => (
  <div className="spinner-container">
    <div className="spinner"></div>
    {label && <h4 className="spinner-label">{label}</h4>}
  </div>
);

export default Spinner;
