import React from "react";
import "./category.css";
import Input from "../../components/Input";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="">
        {/* <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label> */}
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Category;
