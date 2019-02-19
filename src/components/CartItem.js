import React from 'react'
import Product from './Product'

const CartItem = ({ product, onRemoveItemClicked }) => (
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
  </div>
)

export default CartItem
