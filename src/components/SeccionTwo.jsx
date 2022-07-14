import React, { useContext, useState } from "react";
import linkind from "../svg/link.svg";
import github from "../svg/git.svg";
import twitter from "../svg/twi.svg";
import "./styles/SeccionTwo.css";
import BlueContext from "../context/BlueContext";
import LanguageContext from "../context/LanguageContext";
import ModalContact from "./ModalContact";
import { RemoveScroll } from "react-remove-scroll";

function SeccionTwo() {
  const { blue } = useContext(BlueContext);
  const { texts } = useContext(LanguageContext);

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  return (
    <>
      {modal && (
        <RemoveScroll>
          <ModalContact setModal={setModal} />
        </RemoveScroll>
      )}
      <section className={blue}>
        <div className="all-info-seccion-two">
          <div className="seccion-two-first-part">
            <h1>{texts.titleSeccionTwo}</h1>
            <p>{texts.textSeccionTwo}</p>
            <button onClick={handleModal}>{texts.buttonSeccionTwo}</button>
          </div>
          <div className="seccion-two-second-part">
            <h2>{texts.titleContactSeccion}</h2>
            <div className="second-part-flex-media">
              <a
                href="https://twitter.com/yerikhar"
                target="_blank"
                rel="noopener noreferrer"
                className="ti-s-two"
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                href="https://github.com/YerikAH"
                target="_blank"
                rel="noopener noreferrer"
                className="ti-s-two"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/harvey-huaranga-802218228/"
                target="_blank"
                rel="noopener noreferrer"
                className="ti-s-two"
              >
                <img src={linkind} alt="LinkInd" />
              </a>
            </div>
            <p>
              {texts.textContactEmail} <b>{texts.emailMe}</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeccionTwo;
