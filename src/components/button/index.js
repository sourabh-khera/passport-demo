import React, { useContext } from "react";
import "./style.css";

const button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick} className="default_button_style">
        {text}
      </button>
    </div>
  );
};

export default button;
