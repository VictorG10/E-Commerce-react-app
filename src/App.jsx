import React, { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import productData from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //Input Filter
  const handleInputChange = (e) => {
    setQuery((prev) => (prev = e.target.value));
  };

  const filteredItems = productData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio Filter
  const handleRadioChange = (e) => {
    setSelectedCategory((prev) => (prev = e.target.value));
  };

  //Button Filter
  const handleClick = (e) => {
    setSelectedCategory((prev) => (prev = e.target.value));
  };

  const filteredData = (productData, selected, query) => {
    let filteredProducts = productData;

    //Filtering Input Items
    query && (filteredProducts = filteredItems);

    //Selected Filter
    selected &&
      (filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      ));

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(productData, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
