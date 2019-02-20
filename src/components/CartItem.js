import React from 'react'
import Product from './Product'
import '../styles/style.css';

const CartItem = ({ product, onRemoveItemClicked, onIncrementClicked, onDecrementClicked }) => {
  const hasInventory = product.inventory > 0 ? true : false
  const quantityInCart = product.quantity > 0 ? true : false

  return (
    <div style={{ marginBottom: 20 }}>
      <Product
        productId={product.id}
        title={product.productTitle}
        price={product.price.value}
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
          disabled={quantityInCart ? '' : 'disabled'}
        >
          -
        </button>
        <span>
          {product.quantity}
        </span>
        <button
          onClick={onIncrementClicked}
          disabled={hasInventory ? '' : 'disabled'}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
