import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const ProductsList = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node
}

export default ProductsList
