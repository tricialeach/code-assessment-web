import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Product = ({ price, inventory, title }) => (
  <div>
    <div className="product-title-price">
      <h2 className="product-title">
        {title}
      </h2>
      <h3 className="product-price">
        &#36;{price}
      </h3>
    </div>
    <h4 className="product-remaining">
      {inventory ? `${inventory} Remaining` : null}
    </h4>
  </div>
)


Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
