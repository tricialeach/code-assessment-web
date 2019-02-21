import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Cart  = ({ products, total, onCheckoutClicked, children, onCartCloseClicked, isActive }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    <div className="active-cart-wrapper">
      {children}
      <div className="checkout-wrapper">
        <div className="totals-wrapper">
          <span className="heading">Subtotal</span><span className="price">&#36;{total}</span>
          <span className="heading">Taxes</span><span className="price">TBD</span>
        </div>
        <div className="totals-wrapper">
          <span className="heading">Total</span><span className="price">&#36;{total}</span>
        </div>
        <button 
          className="btn btn-checkout"
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className="empty-cart-wrapper">
      <svg className="empty-cart-icon" id="empty-cart-icon" data-name="Empty Cart Icon" xmlns="http://www.w3.org/2000/svg" width="95" height="76" viewBox="0 0 95 76"><g id="v2"><g id="Desktop-Copy-2"><path id="Shape" d="M94.3,21.566a2,2,0,0,0-1.631-.842H19.682L14.288,1.461A2,2,0,0,0,12.362,0H2A2,2,0,0,0,2,4h8.846l12.6,45.007A8.5,8.5,0,0,0,23.583,66h2.563A6.542,6.542,0,1,0,38.2,66H59.379a6.541,6.541,0,1,0,11.776,0h3.513a2,2,0,0,0,0-4H23.582a4.5,4.5,0,0,1,0-9H82.823a2,2,0,0,0,1.97-1.7l9.762-27.915A2,2,0,0,0,94.3,21.566ZM65.266,71.372a2.542,2.542,0,1,1,2.541-2.542A2.544,2.544,0,0,1,65.266,71.372ZM34.714,68.54A2.542,2.542,0,1,1,32.172,66,2.546,2.546,0,0,1,34.714,68.54ZM88.295,29.166H74.532l.631-4.443H89.849ZM84.856,39H73.135l.829-5.833H86.9Zm-3.5,10H71.714l.852-6H83.459ZM57.427,49V43h11.1l-.853,6ZM43.181,49l-.853-6h11.1v6ZM27.6,49l-1.68-6H38.288l.852,6ZM57.427,29.166V24.723h13.7l-.631,4.443Zm12.5,4L69.094,39H57.427V33.166Zm-16.5-4H40.362l-.631-4.443h13.7v4.443Zm0,4V39H41.76l-.829-5.833ZM37.719,39H24.8l-1.634-5.833H36.89ZM35.69,24.724l.631,4.443H22.046L20.8,24.724Z" fill="#9b9b9b"/></g></g></svg>
      <p className="empty-cart-text">Please add some products to your cart.</p>
    </div>
  )

  return (
    <div className={"cart-wrapper" + (isActive ? ' cart-active' : '')}>
      <div className="cart-contents">
        <svg 
          onClick={onCartCloseClicked}
          className="cart-close-icon" id="cart-close-icon" data-name="Close Cart" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>close-x</title><g id="v2"><g id="Desktop-Copy-2"><g id="Group"><path id="Line-3" d="M1.714,1.714,30.658,30.658" fill="none" stroke="#9b9b9b"/><path id="Line-3-2" data-name="Line-3" d="M29,2,1,31" fill="none" stroke="#9b9b9b" /></g></g></g></svg>
        <h2 className="cart-header txt-chivo-bold txt-size-5">Your cart</h2>
        {nodes}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
