import React from 'react'
import Product from './Product'

const CartItem = ({ product, onRemoveItemClicked, onIncrementClicked, onDecrementClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      productId={product.id}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      key={product.id} />
    <button
      onClick={onRemoveItemClicked}
    >
      Remove
    </button>
    <div>
      <button
        onClick={onDecrementClicked}
      >
        -
      </button>
      <span>
        {product.quantity}
      </span>
      <button
        onClick={onIncrementClicked}
      >
        +
      </button>
    </div>
  </div>
)

export default CartItem
