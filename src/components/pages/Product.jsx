import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../breadcrum/Breadcrum'
import all_product from '../Assets/all_product'
import Productdisplay from '../productdisplay/Productdisplay'

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className='product'>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
    </div>
  )
}

export default Product