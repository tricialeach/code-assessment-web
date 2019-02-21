import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { removeFromCart } from '../actions'
import { incrementQuantity } from '../actions'
import { decrementQuantity } from '../actions'
import { displayCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import '../styles/style.css';

const CartContainer = ({ products, total, isActive, checkout, removeFromCart, incrementQuantity, decrementQuantity, displayCart }) => {
  return (
    <Cart
      products={products}
      total={total}
      isActive = {isActive}
      onCheckoutClicked={() => checkout(products)}
      onCartCloseClicked={() => displayCart()}>
        {products.map(product =>
          <CartItem
            key={product.id}
            product={product}
            onRemoveItemClicked={() => removeFromCart(product.id)}
            onIncrementClicked={() => incrementQuantity(product.id)}
            onDecrementClicked={() => decrementQuantity(product.id)} />
        )}
    </Cart>
  )
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isActive: state.cart.isActive
})

export default connect(mapStateToProps,
  { checkout, removeFromCart, incrementQuantity, decrementQuantity, displayCart }
)(CartContainer)
