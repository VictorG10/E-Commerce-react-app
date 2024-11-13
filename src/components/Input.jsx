import React from "react";

const Input = ({ handleRadioChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleRadioChange}
      />
      <span className="checkmark" style={{ background: color }}></span>
      {title}
    </label>
  );
};

export default Input;
