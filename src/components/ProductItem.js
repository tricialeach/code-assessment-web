import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ProductImage from './ProductImage'
import '../styles/style.css';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-wrapper">
    <ProductImage title={product.productTitle} />
    <div className="product-details-wrapper">
      <Product
        title={product.productTitle}
        price={product.price.value}
        inventory={product.inventory} />
      <div>
        <button
          className="btn"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
