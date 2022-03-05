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
            ariaLabel="Close Modal"
            styleType="clear"
            onClick={() => setsShowModal(false)}
          >
            <FontAwesomeIcon color="#b20d0d" icon={faXmarkCircle} size="lg" />
          </Button>
        </div>
        {src && <img alt="" className="modal-image" src={src} />}
        {src && (
          <div className="download-container">
            <a download href={src} rel="noreferrer" target="_blank">
              <FontAwesomeIcon color="black" icon={faDownload} size="lg" />{" "}
              Download Image
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default ModalImage;
