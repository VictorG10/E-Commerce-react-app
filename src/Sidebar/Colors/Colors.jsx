import React from "react";
import "./colors.css";
import Input from "../../components/Input";

const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value=""
          name="test1"
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      {/* <Input
        handleRadioChange={handleRadioChange}
        value="white"
        title="White"
        name="test1"
        color="white"
      /> */}
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
