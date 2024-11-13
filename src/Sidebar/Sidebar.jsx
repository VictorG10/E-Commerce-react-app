import React from "react";
import "./sidebar.css";
import Category from "./Categories/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleRadioChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleRadioChange={handleRadioChange} />
        <Price handleRadioChange={handleRadioChange} />
        <Colors handleRadioChange={handleRadioChange} />
      </section>
    </>
  );
};

export default Sidebar;
