import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { displayCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Header from '../components/Header'
import '../styles/style.css';

const ProductsContainer = ({ products, addToCart, cart, displayCart }) => {

  return (
    <main>
      <Header
        cart={cart}
        title={'Acme Store'}
        onCartIconClicked={() => displayCart()} 
        >
      </Header>
      <ProductsList>
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    </main>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  cart: state.cart
})

export default connect(
  mapStateToProps,
  { addToCart, displayCart }
)(ProductsContainer)
