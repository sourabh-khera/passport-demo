import React, { useContext } from "react";
import ReactDom from "react-dom";
import "./style.css";

const button = ({ handleClick, text }) => {
  const LoginButton = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick} className="default_button_style">
        {text}
      </button>
    );
  };
  return (
    <div>
      {ReactDom.createPortal(
        <LoginButton handleClick={handleClick} text={text} />,
        document.getElementById("google-btn")
      )}
    </div>
  );
};

export default button;
