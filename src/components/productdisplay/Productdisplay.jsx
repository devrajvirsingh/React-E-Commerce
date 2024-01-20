import React, { useContext } from 'react'
import './productdisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'

const Productdisplay = (props) => {
    const {product} = props
    const {addtocart} = useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-img">
                <img src={product.image} alt=""  className='product-display-main-img'/>
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="product-display-right-price-new">Rs {product.new_price}</div>
                <div className="product-display-right-price-old">Rs {product.old_price}</div>
            </div>
            <div className="product-display-right-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit ipsa. Eum assumenda sequi nisi.</p>
            </div>
            <div className="product-display-right-size">
                <h1>Select size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='add-to-cart' onClick={()=>{addtocart(product.id)}}>Add to cart</button>
        </div>
    </div>
  )
}

export default Productdisplay