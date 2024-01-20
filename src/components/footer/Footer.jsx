import React from 'react'
import './foot.css'
import logo_big from '../Assets/logo_big.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="image-part">
            <img src={logo_big} alt="" />
            <div className="logo">SHOPPERS</div>
        </div>
        <ul className='nav-items'>
            <li className="items">company</li>
            <li className="items">about</li>
            <li className="items">offices</li>
            <li className="items">contact</li>
        </ul>
        <div className="social">
            <img src={whatsapp} alt="" />
            <img src={instagram} alt="" />
            <img src={pintrest} alt="" />
        </div>
    </div>
  )
}

export default Footer