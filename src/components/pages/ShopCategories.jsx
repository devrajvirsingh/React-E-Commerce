import React, { useContext } from 'react'
import './css/shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Card from '../card/Card'

const ShopCategories = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-indexsort">
        <p><span>Showing 1-12 </span>out of 36 products</p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
             return <Card key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategories