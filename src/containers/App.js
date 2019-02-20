import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../styles/style.css';

const App = () => (
  <div className="container">
    <header className="header">
      <h1 className="txt-chivo-bold txt-size-6">Acme Store</h1>
    </header>
    <main>
      <ProductsContainer />
      <CartContainer />
    </main>
  </div>
)

export default App
