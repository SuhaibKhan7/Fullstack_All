import React from 'react'

function ProductCard({ name, price, stock }) {
  return (
      <div>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      
      </div>
  )
}

export default ProductCard