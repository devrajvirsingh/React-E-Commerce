import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState('shop')
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPERS kART</p>
            </div>
            <ul className='list'>
                <li className='list-item' onClick={() => { setMenu('shop') }}><Link to='/' style={{ textDecoration: 'none', color: 'grey' }}>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
                <li className='list-item' onClick={() => { setMenu('men') }}><Link to='/mens' style={{ textDecoration: 'none', color: 'grey' }}>Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
                <li className='list-item' onClick={() => { setMenu('women') }}><Link to='/womens' style={{ textDecoration: 'none', color: 'grey' }}>Women</Link>{menu === 'women' ? <hr /> : <></>}</li>
                <li className='list-item' onClick={() => { setMenu('kids') }}><Link to='/kids' style={{ textDecoration: 'none', color: 'grey' }}>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button ><Link to='/loginsignup' style={{color:"grey" , textDecoration:"none"}}>Login</Link></button>
                <img src={cart} alt="" />
                <div className="cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar