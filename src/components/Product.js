import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const Product = ({ price, inventory, title }) => (
  <div>
    <img src="http://placekitten.com/450/275" />
    <h2>
      {title}
    </h2>
    <h3>
      &#36;{price}
    </h3>
    <h4>
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
