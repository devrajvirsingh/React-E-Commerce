import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
                <div className="left-heading">NEW ARRIVALS ONLY</div>
                <div className="left-heading2">
                    <div className="title">new</div>
                    <div className="logo"><img src={hand_icon} alt="" /></div>
                </div>
                <div className="title">collections</div>
                <div className="title">for everyone</div>
                <button>Latest Collections <img src={arrow} alt="" className='arrow' /></button>
        </div>
        <div className="hero-right">
            <div className="right-img">
              <img src={hero_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero