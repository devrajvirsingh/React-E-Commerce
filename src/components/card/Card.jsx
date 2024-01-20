import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div className='card'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                   Rs {props.new_price}
                </div>
                <div className="item-price-old">
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Card