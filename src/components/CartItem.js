import React from 'react'
import Product from './Product'
import ProductImage from './ProductImage'
import '../styles/style.css';

const CartItem = ({ product, onRemoveItemClicked, onIncrementClicked, onDecrementClicked }) => {
  const hasInventory = product.inventory > 0 ? true : false
  const quantityInCart = product.quantity > 0 ? true : false

  return (
    <div className="cart-product-wrapper">
      <div className="product-wrapper">
        <ProductImage 
          product={product} />
        <div className="product-details-wrapper">
          <Product
            productId={product.id}
            title={product.productTitle}
            price={product.price.value}
            quantity={product.quantity}
            key={product.id} />
          <span
            className="remove-button"
            onClick={onRemoveItemClicked}>
            Remove
          </span>
        </div>
      </div>
      <div className="quantity-adjustment">
        <button
          className="btn btn-quantity btn-left"
          onClick={onDecrementClicked}
          disabled={quantityInCart ? '' : 'disabled'}>
          &ndash;
        </button>
        <span className="product-quantity">
          {product.quantity}
        </span>
        <button
          className="btn btn-quantity btn-right"
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
