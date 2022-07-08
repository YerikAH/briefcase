import { createContext, useState } from "react";
const BlueContext = createContext();

const BlueProvider = ({ children }) => {
  const [blue, setBlue] = useState("original-theme");

  const handleClickBlue = (e) => {
    e.preventDefault();
    if (blue !== "blue-theme") {
      setBlue("blue-theme");
      localStorage.setItem("theme", "blue");
    }
  };

  const handleClickYellow = (e) => {
    e.preventDefault();
    if (blue !== "yellow-theme") {
      setBlue("yellow-theme");
      localStorage.setItem("theme", "yellow");
    }
  };

  const handleClickRed = (e) => {
    e.preventDefault();
    if (blue !== "red-theme") {
      setBlue("red-theme");
      localStorage.setItem("theme", "red");
    }
  };

  const handleClickGreen = (e) => {
    e.preventDefault();
    if (blue !== "green-theme") {
      setBlue("green-theme");
      localStorage.setItem("theme", "green");
    }
  };
  const handleClickOriginal = (e) => {
    e.preventDefault();
    if (blue !== "original-theme") {
      setBlue("original-theme");
      localStorage.setItem("theme", "original");
    }
  };
  const handleClickBlack = (e) => {
    e.preventDefault();
    if (blue !== "black-theme") {
      setBlue("black-theme");
      localStorage.setItem("theme", "black");
    }
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") == "blue") {
      setBlue("blue-theme");
    } else if (localStorage.getItem("theme") == "yellow") {
      setBlue("yellow-theme");
    } else if (localStorage.getItem("theme") == "red") {
      setBlue("red-theme");
    } else if (localStorage.getItem("theme") == "green") {
      setBlue("green-theme");
    } else if (localStorage.getItem("theme") == "original") {
      setBlue("original-theme");
    } else if (localStorage.getItem("theme") == "black") {
      setBlue("black-theme");
    } else {
      setBlue("original-theme");
    }
  });

  const data = {
    handleClickBlue,
    handleClickYellow,
    handleClickRed,
    handleClickGreen,
    handleClickOriginal,
    handleClickBlack,
    blue,
  };

  return <BlueContext.Provider value={data}>{children}</BlueContext.Provider>;
};
export { BlueProvider };
export default BlueContext;
