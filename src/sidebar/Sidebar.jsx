import React from 'react'
import Category from "./jsxFiles/Category"
import Colors from "./jsxFiles/Colors"
import Price from "./jsxFiles/Price"
import "./Sidebar.css"

const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <div className="category">
        <Category handleChange={handleChange} />
        </div>

        <div className="colors">
        <Colors handleChange={handleChange} />
        </div>

        <div className="price">
        <Price handleChange={handleChange} />
        </div>
        
      </section>
    </>
  )
}

export default Sidebar