import React from 'react'
import "../Product/Product.css"

const Product = ({result}) => {
  return (
    <>
      {/* <Section className="card-container" >{result}</Section> */}
     <section className="card-container">
     {result}
     </section>
    </>
  )
}

export default Product
