import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Product = ({ price, inventory, title }) => (
  <div>
    <div className="product-title-price">
      <h2 className="txt-chivo txt-size-5">
        {title}
      </h2>
      <h3 className="txt-chivo-light txt-size-4 txt-light">
        &#36;{price}
      </h3>
    </div>
    <h4 className="txt-size-1 txt-gray txt-uppercase">
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
