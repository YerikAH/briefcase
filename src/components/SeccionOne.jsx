import { useContext } from "react";
import tecMobileLight from "../svg/skills-show-mobile-light.svg";
import tecMobileDark from "../svg/skills-show-mobile-dark.svg";

import tecDesktopLight from "../svg/skills-show-desktop-light.svg";
import tecDesktopDark from "../svg/skills-show-desktop-dark.svg";
import ThemeContext from "../context/ThemeContext";
import "./styles/SeccionOne.css";
import LanguageContext from "../context/LanguageContext";

function SeccionOne() {
  const { darkmode } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={darkmode}>
      <section className="seccion-one">
        <h1 className="seccion-one-title">{texts.title}</h1>
        <p className="seccion-one-text">{texts.textSeccionOne}</p>
        <img
          className="seccion-one-image-light"
          src={tecMobileLight}
          alt="JavaScript, React, WordPress, GitHub"
        />
        <img
          className="seccion-one-image-dark"
          src={tecMobileDark}
          alt="JavaScript, React, WordPress, GitHub"
        />

        <img
          className="seccion-one-image-light-desktop"
          src={tecDesktopLight}
          alt="JavaScript, React, WordPress, GitHub"
        />
        <img
          className="seccion-one-image-dark-desktop"
          src={tecDesktopDark}
          alt="JavaScript, React, WordPress, GitHub"
        />
      </section>
    </div>
  );
}

export default SeccionOne;
