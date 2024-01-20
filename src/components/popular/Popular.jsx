import React from 'react'
import './popular.css'
import Card from '../card/Card'
import data_product from '../Assets/data'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in women</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item , i)=>{
                return <Card key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Popular