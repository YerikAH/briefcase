import React, { useContext } from "react";
import CertiGit from "../svg/certi/git.svg";
import CertiHtml from "../svg/certi/html.svg";
import CertiJav from "../svg/certi/jav.svg";
import CertiNext from "../svg/certi/next.svg";
import CertiNode from "../svg/certi/node.svg";
import CertiPy from "../svg/certi/py.jpg";
import CertiReact from "../svg/certi/reac.svg";
import CertiWeb from "../svg/certi/web.svg";
import closeHam from "../svg/close-ham-dark.svg";

import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

import "./styles/ModalCerti.css";
function ModalCerti({ setEx }) {
  const { darkmode } = useContext(ThemeContext);
  const { blue } = useContext(BlueContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div className={blue}>
      <div className={darkmode}>
        <div className="center-certi">
          <div className="grid-modal-cert">
            <img
              src={closeHam}
              alt="close-modal"
              className="img-close-modal"
              onClick={() => setEx(false)}
            />
            <h2>
              {texts.titleModalTwo}{" "}
              <svg
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8.5C9.20937 8.5 11 6.59746 11 4.25C11 1.90254 9.20937 0 7 0C4.79063 0 3 1.90254 3 4.25C3 6.59746 4.79063 8.5 7 8.5ZM9.99375 9.58242L8.5 15.9375L7.5 11.4219L8.5 9.5625H5.5L6.5 11.4219L5.5 15.9375L4.00625 9.58242C1.77812 9.69531 0 11.6311 0 14.025V15.4062C0 16.2861 0.671875 17 1.5 17H12.5C13.3281 17 14 16.2861 14 15.4062V14.025C14 11.6311 12.2219 9.69531 9.99375 9.58242Z"
                  fill="#4C556D"
                />
              </svg>
            </h2>
            <p>
              {texts.textModalTwo}
              <a
                href="https://platzi.com/p/yerik05vh/"
                target="_blank"
                className="link-certi"
              >
                {" "}
                {texts.linkModalTwo}
              </a>
            </p>
            <div className="grid-sqare-certi">
              <img src={CertiReact} alt="certificado-react" />
              <img src={CertiJav} alt="certificado-javascript" />
              <img src={CertiNext} alt="certificado-nextjs" />
              <img src={CertiNode} alt="certificado-nodejs" />
              <img src={CertiWeb} alt="certificado-webpack" />
              <img src={CertiGit} alt="certificado-github" />
              <img src={CertiHtml} alt="certificado-html&css" />
              <img src={CertiPy} alt="certificado-python" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCerti;
