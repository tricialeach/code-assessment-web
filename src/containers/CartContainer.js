import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'


const CartContainer = ({ products, total, checkout, removeFromCart }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}>
      {products.map(product =>
        <CartItem
          key={product.id}
          product={product}
          onRemoveItemClicked={() => removeFromCart(product.id)} />
      )}
  </Cart>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
