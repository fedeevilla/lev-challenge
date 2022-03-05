import React from "react";
import { faDownload, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { IModalImage } from "./types";
import "./styles.scss";

const ModalImage = ({ show, src, setsShowModal }: IModalImage): JSX.Element => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="button-container">
          <Button
            onClick={() => setsShowModal(false)}
            styleType="clear"
            ariaLabel="Close Modal"
          >
            <FontAwesomeIcon icon={faXmarkCircle} size="lg" color="#b20d0d" />
          </Button>
        </div>
        {src && <img alt="" className="modal-image" src={src} />}
        {src && (
          <div className="download-container">
            <a href={src} download target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDownload} size="lg" color="black" />{" "}
              Download Image
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default ModalImage;
