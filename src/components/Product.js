import React from 'react'
import PropTypes from 'prop-types'
import RemoveButton from './RemoveButton'

const Product = ({ price, inventory, title, isCartProduct }) => (
  <div>
    <h4>
      {title}
    </h4>
    <h5>
      &#36;{price}{inventory ? ` x ${inventory}` : null}
    </h5>
    {isCartProduct ? <RemoveButton /> : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
