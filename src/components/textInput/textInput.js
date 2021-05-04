import React from "react";
import "./style.css";

const textInput = ({
  placeholder,
  handleChange,
  name,
  value,
  type,
  testId,
}) => {
  return (
    <div>
      <input
        type={type}
        maxLength="30"
        placeholder={placeholder}
        onChange={handleChange}
        className="text_input"
        name={name}
        value={value}
        data-testid={testId}
      />
    </div>
  );
};

export default textInput;
