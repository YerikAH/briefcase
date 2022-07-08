import Navegator from "./components/Navegator";
import SeccionOne from "./components/SeccionOne";
import SeccionTwo from "./components/SeccionTwo";
import { RemoveScroll } from "react-remove-scroll";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BlueProvider } from "./context/BlueContext";
import "./darkMode.css";
import "./Theme.css";

import { LanguageProvider } from "./context/LanguageContext";
import Projects from "./components/Projects";
import SeccionFive from "./components/SeccionFive";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  const styleNoMenu = {
    overflow: "hidden",
    height: "0",
  };
  const styleYesMenu = {
    height: "100vh",
  };
  const [menu, setMenu] = useState(false);
  const separatorFather = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  };
  const separatorChild = {
    width: "100%",
    height: "1px",
    backgroundColor: "var(--text)",
    maxWidth: "720px",
  };
  return (
    <>
      <LanguageProvider>
        <BlueProvider>
          <ThemeProvider>
            {menu ? (
              <RemoveScroll>
                <Navegator
                  styleYesMenu={styleYesMenu}
                  menu={menu}
                  setMenu={setMenu}
                />
              </RemoveScroll>
            ) : (
              <Navegator style={styleNoMenu} menu={menu} setMenu={setMenu} />
            )}

            <main>
              <SeccionOne />
              <SeccionTwo />
              <Projects />
              <SeccionFive />
              <div style={separatorFather}>
                <div style={separatorChild}></div>
              </div>
              <AboutMe />
            </main>
            <Footer />
          </ThemeProvider>
        </BlueProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
