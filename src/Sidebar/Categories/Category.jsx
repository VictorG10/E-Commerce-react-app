import React from "react";
import "./category.css";
import Input from "../../components/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="test3"
          />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value="sneakers"
          title="Sneakers"
          name="test3"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value="flats"
          title="Flats"
          name="test3"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value="sandals"
          title="Sandals"
          name="test3"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value="heels"
          title="Heels"
          name="test3"
        />
      </div>
    </div>
  );
};

export default Category;
