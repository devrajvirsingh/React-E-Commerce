import React from 'react'
import './offer.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY THE BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offers