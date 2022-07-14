import React, { useContext } from "react";
import BlueContext from "../context/BlueContext";
import ThemeContext from "../context/ThemeContext";

import "./styles/BtnScroll.css";
function BtnScroll() {
  const { darkmode } = useContext(ThemeContext);
  const { blue } = useContext(BlueContext);
  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <div className={darkmode}>
      <div className={blue}>
        <button className="scroll-btn" onClick={handleScroll}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="btn-scroll-color"
              d="M0 12.1094C0 5.41992 5.41992 0 12.1094 0C18.7988 0 24.2188 5.41992 24.2188 12.1094C24.2188 18.7988 18.7988 24.2188 12.1094 24.2188C5.41992 24.2188 0 18.7988 0 12.1094ZM14.2578 17.7734V12.1094H17.7197C18.2422 12.1094 18.5059 11.4746 18.1348 11.1084L12.5244 5.52734C12.2949 5.29785 11.9287 5.29785 11.6992 5.52734L6.08398 11.1084C5.71289 11.4795 5.97656 12.1094 6.49902 12.1094H9.96094V17.7734C9.96094 18.0957 10.2246 18.3594 10.5469 18.3594H13.6719C13.9941 18.3594 14.2578 18.0957 14.2578 17.7734Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BtnScroll;
