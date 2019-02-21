import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../styles/style.css';

const App = () => {
  return(
    <div className="container">
      <ProductsContainer />
      <CartContainer />
    </div>
  )
}

export default App
