import React, { useContext } from "react";
import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import photo from "../svg/me.jpg";
import iconAboutLight from "../svg/about-light.svg";
import emojiHi from "../svg/emoji-hello.svg";
import "./styles/SeccionSix.css";
function AboutMe() {
  const { darkmode } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { blue } = useContext(BlueContext);
  return (
    <div className={blue}>
      <div className={darkmode}>
        <section className="section-six">
          <div className="title-section-six">
            <h3>{texts.titleAbout}</h3>
            <span>
              <img src={iconAboutLight} className="about-light" alt="" />
            </span>
          </div>
          <p className="text-about-one">
            <span>
              {texts.hiAbout}
              <img src={emojiHi} alt="" />
            </span>
            <br />
            {texts.textAboutOne}{" "}
            <a href="" className="link-about">
              {texts.linkAbout}
            </a>
          </p>
          <div className="photo-responsive-me">
            <div className="first-border">
              <div className="second-border">
                <img src={photo} alt="" />
              </div>
            </div>
          </div>
          <p className="text-about-two">{texts.textAboutTwo}</p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
