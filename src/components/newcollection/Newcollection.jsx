import React from 'react'
import './newcollection.css'
import new_collections from '../Assets/new_collections'
import Card from '../card/Card'
const Newcollection = () => {
  return (
    <div className='new-collection'>
         <h1>New Collections</h1>
        <hr />
        <div className="collection-item">
            {new_collections.map((item , i)=>{
                return <Card key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Newcollection