import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
import { IModalImage } from "./types";

const ModalImage = ({ show, src, setsShowModal }: IModalImage): JSX.Element => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="button-container">
          <button
            className="delete-button"
            onClick={() => setsShowModal(false)}
          >
            <FontAwesomeIcon icon={faXmarkCircle} size="lg" color="red" />
          </button>
        </div>
        <img className="modal-image" src={src} alt=""></img>
      </section>
    </div>
  );
};

export default ModalImage;
