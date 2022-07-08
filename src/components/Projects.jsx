import React, { useContext } from "react";
import projectCat from "../svg/project-cat.jpg";
import projectBuss from "../svg/project-business.jpg";
import projectCalc from "../svg/project-calc.jpg";
import iconProjectLight from "../svg/icon-project-light.svg";
import "./styles/Projects.css";

import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

function Projects() {
  const { darkmode } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { blue } = useContext(BlueContext);
  return (
    <div className={blue}>
      <div className={darkmode}>
        <section className="section-four" id="projects">
          <div className="title-seccion-four">
            <h2>{texts.titleProjecs}</h2>
            <span>
              <img
                className="icon-project-light"
                src={iconProjectLight}
                alt=""
              />
            </span>
          </div>
          <div className="project-show">
            <h3>{texts.firstProjects}</h3>
            <div className="image-for-show">
              <img src={projectCat} alt="" />
            </div>
            <p>{texts.firstProjectsText}</p>
            <div className="buttons-project">
              <button className="btn-view-code">{texts.btnViewCode}</button>
              <button className="btn-view-app">{texts.btnViewApp}</button>
            </div>
          </div>

          <div className="project-show">
            <h3>{texts.secondProjects}</h3>
            <div className="image-for-show">
              <img src={projectBuss} alt="" />
            </div>
            <p>{texts.secondProjectsText}</p>
            <div className="buttons-project">
              <button className="btn-view-code">{texts.btnViewCode}</button>
              <button className="btn-view-app">{texts.btnViewApp}</button>
            </div>
          </div>

          <div className="project-show" id="special-project">
            <h3>{texts.threeProjects}</h3>
            <div className="image-for-show">
              <img src={projectCalc} alt="" />
            </div>
            <p>{texts.threeProjectsText}</p>
            <div className="buttons-project">
              <button className="btn-view-code">{texts.btnViewCode}</button>
              <button className="btn-view-app">{texts.btnViewApp}</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
