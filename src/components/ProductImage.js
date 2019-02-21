import React from 'react'
import '../styles/style.css'

const ProductImage = ({ product }) => {
  const imgSrc = '/img/image-' + product.id + '.jpg'
  return ( 
    <img src={process.env.PUBLIC_URL + imgSrc} alt={product.productTitle} />
  )
}

export default ProductImage
