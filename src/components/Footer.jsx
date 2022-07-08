import React, { useContext } from "react";

import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";

function Footer() {
  const { darkmode } = useContext(ThemeContext);
  const { blue } = useContext(BlueContext);
  const styleFoot = {
    width: "100vw",
    textAlign: "center",
  };
  const pFoot = {
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.10em",
    padding: "0.5rem",
  };
  return (
    <div className={blue}>
      <div className={darkmode}>
        <footer className="footer" style={styleFoot}>
          <p style={pFoot} className="special-fot" id="letter-fot">
            ©2022 Harvey Vasquez
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
