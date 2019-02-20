import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../styles/style.css';

const App = () => (
  <div>
    <h1>Acme Store</h1>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
