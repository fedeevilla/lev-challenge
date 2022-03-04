import React from "react";
import "./styles.scss";

const Spinner = ({ label = "" }: { label?: string }): JSX.Element => (
  <div className="spinner-container">
    <div className="spinner"></div>
    {label && <h4 className="spinner-label">{label}</h4>}
  </div>
);

export default Spinner;
