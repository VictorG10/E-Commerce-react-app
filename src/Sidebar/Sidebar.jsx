import React from "react";
import "./sidebar.css";
import Category from "./Categories/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
