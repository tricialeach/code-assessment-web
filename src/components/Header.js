import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Header = ({ title, cart, onCartIconClicked }) => {
  const cartQuantities = Object.values(cart.quantityById)
  const getSum = (total, num) => total + num;
  let quantityInCart
  if (cartQuantities.length > 0) {
    quantityInCart = cartQuantities.reduce(getSum)
  }
  return (
    <header className="header-wrapper">
      <h1 className="heading"><a href="/">{title}</a></h1>
      <div
        className="header-cart-link"
        onClick={onCartIconClicked}>
        <svg className="header-cart-icon" id="header-cart-icon" data-name="Header Cart Icon" xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14"><title>cart-icon-new</title><g id="v2"><g id="_1280" data-name="1280"><g id="Group-5"><g id="Group"><path id="Shape" d="M16.934,3.873a.359.359,0,0,0-.293-.151H3.534L2.566.262A.359.359,0,0,0,2.22,0H.359a.359.359,0,0,0,0,.718H1.948L4.211,8.8a1.526,1.526,0,0,0,.024,3.052H4.7a1.175,1.175,0,1,0,2.165,0h3.8a1.175,1.175,0,1,0,2.115,0h.631a.359.359,0,0,0,0-.718H4.235a.808.808,0,1,1,0-1.616H14.873a.358.358,0,0,0,.354-.305L16.98,4.2A.359.359,0,0,0,16.934,3.873ZM11.72,12.817a.456.456,0,1,1,.456-.456A.457.457,0,0,1,11.72,12.817Zm-5.486-.509a.456.456,0,1,1-.456-.456A.457.457,0,0,1,6.234,12.308Zm9.622-7.071H13.384l.113-.8h2.637ZM15.238,7h-2.1l.149-1.047H15.6ZM14.61,8.8H12.878l.153-1.077h1.956Zm-4.3,0V7.722h1.993L12.152,8.8Zm-2.558,0L7.6,7.722H9.594V8.8Zm-2.8,0-.3-1.077H6.876L7.029,8.8Zm5.356-3.562v-.8h2.459l-.113.8Zm2.244.718L12.408,7h-2.1V5.956ZM9.594,5.238H7.248l-.113-.8H9.594v.8Zm0,.718V7H7.5L7.35,5.956ZM6.773,7H4.453L4.16,5.956H6.625ZM6.409,4.44l.113.8H3.959l-.223-.8Z" fill="#292929"/></g></g></g></g></svg>
        <span className="cart-link-text">
          {quantityInCart > 0 ? '(' + quantityInCart + ')' : 'Your cart is empty'}
        </span>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header