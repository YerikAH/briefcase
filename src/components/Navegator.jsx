import React, { useContext, useRef } from "react";
import { Link } from "react-scroll";
import "./styles/Navegator.css";

import logoMobileLight from "../svg/logo-mobile-light.svg";
import logoMobileDark from "../svg/logo-mobile-dark.svg";
import logoDesktopLight from "../svg/logo-desktop.svg";
import logoDesktopDark from "../svg/logo-desktop-dark.svg";
import hamburgerLight from "../svg/ham-light.svg";
import hamburgerDark from "../svg/ham-dark.svg";
import sun from "../svg/sun.svg";
import moon from "../svg/moon.svg";
import ThemeContext from "../context/ThemeContext";
import BlueContext from "../context/BlueContext";
import LanguageContext from "../context/LanguageContext";
import closeHam from "../svg/close-ham.svg";

function Navegator({ styleYesMenu, styleNoMenu, menu, setMenu }) {
  const { switchChildren, handleClickButton, darkmode } =
    useContext(ThemeContext);

  const {
    handleClickBlue,
    handleClickYellow,
    handleClickRed,
    handleClickGreen,
    handleClickOriginal,
    handleClickBlack,
    blue,
  } = useContext(BlueContext);

  const { texts, handleLanguage } = useContext(LanguageContext);

  const language = useRef();
  const navigatorLanguage = useRef();
  const color = useRef();
  const navigatorColor = useRef();

  const handleClickLanguage = (e) => {
    e.preventDefault();
    let height = 0;
    if (navigatorLanguage.current.clientHeight == "0") {
      height = navigatorLanguage.current.scrollHeight;
    }
    navigatorLanguage.current.style.height = `${height}px`;
  };

  const handleClickColor = (e) => {
    e.preventDefault();
    let height = 0;
    if (navigatorColor.current.clientHeight == "0") {
      height = navigatorColor.current.scrollHeight;
    }
    navigatorColor.current.style.height = `${height}px`;
  };

  const handleClickMenu = (e) => {
    e.preventDefault();
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  const nopMen = {
    display: "none",
  };
  const yepMen = {
    display: "block",
  };

  return (
    <div className={darkmode}>
      <nav className="navegator">
        <div className="navegator-soport">
          <a href="" className="soport-a-logo">
            <img src={logoMobileLight} alt="" className="logo-light-mobile" />
            <img src={logoMobileDark} alt="" className="logo-dark-mobile" />
          </a>
          {!menu ? (
            <>
              <a
                className="soport-a-ham"
                href=""
                onClick={handleClickMenu}
                style={yepMen}
              >
                <img src={hamburgerLight} alt="" className="ham-light" />
                <img src={hamburgerDark} alt="" className="ham-dark" />
              </a>
              <a
                className="soport-a-ham-close"
                href=""
                onClick={handleClickMenu}
                style={nopMen}
              >
                <img src={closeHam} alt="" className="ham-light" />
              </a>
            </>
          ) : (
            <>
              <a
                className="soport-a-ham"
                href=""
                onClick={handleClickMenu}
                style={nopMen}
              >
                <img src={hamburgerLight} alt="" className="ham-light" />
                <img src={hamburgerDark} alt="" className="ham-dark" />
              </a>
              <a
                className="soport-a-ham-close"
                href=""
                onClick={handleClickMenu}
                style={yepMen}
              >
                <img src={closeHam} alt="" className="ham-light-close" />
                <img src={closeHam} alt="" className="ham-dark-close" />
              </a>
            </>
          )}
        </div>
        {!menu ? (
          <ul className="navegator-ul" style={styleNoMenu}>
            <img src={logoDesktopLight} className="logo-desktop-light" alt="" />
            <img src={logoDesktopDark} className="logo-desktop-dark" alt="" />

            <li className="navegator-first-li">
              <a className="navegator-ul-a" href="#">
                {texts.home}
              </a>
            </li>
            <li>
              <Link
                className="navegator-ul-a"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {texts.about}
              </Link>
            </li>
            <li>
              <Link
                className="navegator-ul-a"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {texts.briefcase}
              </Link>
            </li>
            <li>
              <a
                className="navegator-ul-a"
                href=""
                ref={language}
                onClick={handleClickLanguage}
              >
                {texts.language}
              </a>
              <ul
                className="navegator-ul-desplace-language"
                ref={navigatorLanguage}
              >
                <div className={blue}>
                  <li className="language-es">
                    <button value="es" onClick={handleLanguage}>
                      ES
                    </button>
                  </li>
                </div>
                <div className={blue}>
                  <li className="language-en">
                    <button value="en" onClick={handleLanguage}>
                      EN
                    </button>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a
                className="navegator-ul-a"
                href=""
                ref={color}
                onClick={handleClickColor}
              >
                {texts.colores}
              </a>
              <ul className="navegator-ul-desplace-color" ref={navigatorColor}>
                <div className="ul-desplace-color-grilla">
                  <li>
                    <a className="blue" href="" onClick={handleClickBlue}></a>
                  </li>
                  <li>
                    <a
                      className="yellow"
                      onClick={handleClickYellow}
                      href=""
                    ></a>
                  </li>
                  <li>
                    <a className="red" onClick={handleClickRed} href=""></a>
                  </li>
                  <li>
                    <a className="green" onClick={handleClickGreen} href=""></a>
                  </li>
                  <li>
                    <a
                      className="original"
                      onClick={handleClickOriginal}
                      href=""
                    ></a>
                  </li>
                  <li>
                    <a className="black" onClick={handleClickBlack} href=""></a>
                  </li>
                </div>
                <div className="separador-for-btn-sun-moon">
                  <button className="btn-sun-moon" onClick={handleClickButton}>
                    <span className="sun-img">
                      <img src={sun} alt="" />
                    </span>
                    <div className="switch" ref={switchChildren}></div>
                    <span className="moon-img">
                      <img src={moon} alt="" />
                    </span>
                  </button>
                </div>
              </ul>
            </li>
          </ul>
        ) : (
          <ul className="navegator-ul" style={styleYesMenu}>
            <img src={logoDesktopLight} className="logo-desktop-light" alt="" />
            <img src={logoDesktopDark} className="logo-desktop-dark" alt="" />

            <li className="navegator-first-li">
              <a className="navegator-ul-a" href="">
                {texts.home}
              </a>
            </li>
            <li>
              <Link
                className="navegator-ul-a"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setMenu(false)}
              >
                {texts.about}
              </Link>
            </li>
            <li>
              <Link
                className="navegator-ul-a"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setMenu(false)}
              >
                {texts.briefcase}
              </Link>
              {/* <a className="navegator-ul-a" href="#project">
                {texts.briefcase}
              </a> */}
            </li>
            <li>
              <a
                className="navegator-ul-a"
                href=""
                ref={language}
                onClick={handleClickLanguage}
              >
                {texts.language}
              </a>
              <ul
                className="navegator-ul-desplace-language"
                ref={navigatorLanguage}
              >
                <div className={blue}>
                  <li className="language-es">
                    <button value="es" onClick={handleLanguage}>
                      ES
                    </button>
                  </li>
                </div>
                <div className={blue}>
                  <li className="language-en">
                    <button value="en" onClick={handleLanguage}>
                      EN
                    </button>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a
                className="navegator-ul-a"
                href=""
                ref={color}
                onClick={handleClickColor}
              >
                {texts.colores}
              </a>
              <ul className="navegator-ul-desplace-color" ref={navigatorColor}>
                <div className="ul-desplace-color-grilla">
                  <li>
                    <a className="blue" href="" onClick={handleClickBlue}></a>
                  </li>
                  <li>
                    <a
                      className="yellow"
                      onClick={handleClickYellow}
                      href=""
                    ></a>
                  </li>
                  <li>
                    <a className="red" onClick={handleClickRed} href=""></a>
                  </li>
                  <li>
                    <a className="green" href="" onClick={handleClickGreen}></a>
                  </li>
                  <li>
                    <a
                      className="original"
                      onClick={handleClickOriginal}
                      href=""
                    ></a>
                  </li>
                  <li>
                    <a className="black" onClick={handleClickBlack} href=""></a>
                  </li>
                </div>
                <div className="separador-for-btn-sun-moon">
                  <button className="btn-sun-moon" onClick={handleClickButton}>
                    <span className="sun-img">
                      <img src={sun} alt="" />
                    </span>
                    <div className="switch" ref={switchChildren}></div>
                    <span className="moon-img">
                      <img src={moon} alt="" />
                    </span>
                  </button>
                </div>
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navegator;
