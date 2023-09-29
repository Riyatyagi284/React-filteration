import React, { useState } from 'react'
import Nav from "./Navbar/Nav.jsx"
import Product from "./Product/Product.jsx"
import products from './db/Constant.js'
import Recommended from "./recommended/Recommended.jsx"
import Sidebar from "./sidebar/Sidebar.jsx"
// card component import left only in this file okay
import Card from "./components/Card.jsx"
import "./index.css"
import Category from './sidebar/jsxFiles/Category.jsx'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    // we will filter products based on { if the query is present in the product title}
    (Product) => Product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio button filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Recommended Buttons Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  function filteredData(products, selected, query) {
    let filteredProducts = [...products]; // Create a copy of the original products array
  
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
  
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          return (
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
          );
        }
      );
    }
  
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div>
        <div style={{ display: "flex",overflowX:"hidden" }}>
          <Sidebar handleChange={handleChange} />

          <div style={{display:"flex",flexDirection:"column"}}>
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Product result={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;