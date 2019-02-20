import React from 'react'
import PropTypes from 'prop-types'
import '../styles/style.css';

const ProductsList = ({ title, children }) => (
  <div>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
