import React, { useContext } from "react";
import iconSkillsLight from "../svg/icon-skills-light.svg";
import allSkillsLight from "../svg/skills-all-light.svg";
import allSkillsDark from "../svg/skills-all-dark.svg";
import allSkillsLightDesktop from "../svg/skills-all-light-desktop.svg";
import allSkillsDarkDesktop from "../svg/skills-all-dark-desktop.svg";
import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import "./styles/SeccionFive.css";

function SeccionFive() {
  const { darkmode } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { blue } = useContext(BlueContext);
  return (
    <div className={blue}>
      <div className={darkmode}>
        <section className="section-five" id="about">
          <div className="section-five-title">
            <h3>{texts.titleSeccionSix}</h3>
            <span>
              <img src={iconSkillsLight} className="icon-skills-light" alt="" />
            </span>
          </div>
          <p>
            {texts.textSeccionSix}{" "}
            <a href="" className="test-line-a">
              {texts.linkSeccionSix}
            </a>
          </p>
          <div className="skills-all-container">
            <img
              src={allSkillsLight}
              className="skills-all-light"
              id="skills-delete-movile"
              alt=""
            />
            <img
              src={allSkillsDark}
              className="skills-all-dark"
              id="skills-delete-movile"
              alt=""
            />
            <img
              src={allSkillsDarkDesktop}
              alt=""
              className="skills-add-light-desktop"
            />
            <img
              src={allSkillsLightDesktop}
              alt=""
              className="skills-add-dark-desktop"
            />
          </div>
          <div className="button-seccion-five">
            <button className="view-curr">{texts.btnViewCurri}</button>
            <button className="view-exam">{texts.btnViewCerti}</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SeccionFive;
