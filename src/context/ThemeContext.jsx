import { createContext, useRef, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState("light");

  const switchChildren = useRef();

  const handleClickButton = (e) => {
    if (darkmode == "light") {
      switchChildren.current.style.right = "0px";
      setDarkmode("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      switchChildren.current.style.right = "30px";
      setDarkmode("light");
      localStorage.setItem("darkmode", "light");
    }
  };
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("darkmode") == "dark") {
      setDarkmode("dark");
    } else {
      setDarkmode("light");
    }
  });

  const data = { switchChildren, handleClickButton, darkmode };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
