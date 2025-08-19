import React from 'react'
import ProductCard from './ProductCard.jsx'




function App(props) {
    const products = [
        { id: 1, name: 'Laptop', price: 1000,stock:10 },
        { id: 3, name: 'Tablet', price: 300,stock:5 },
   ]
  return (
      <>
       {  products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} stock={product.stock} />
        ))}
          
     </>
  )
}

export default App