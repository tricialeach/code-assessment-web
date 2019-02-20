import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Cart  = ({ products, total, onCheckoutClicked, children }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    null
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className="hide">
      <h2>Your cart</h2>
      <div>{nodes}</div>
      <div>{children}</div>
      <p>Subtotal: &#36;{total}</p>
      <p>Taxes: TBD</p>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
