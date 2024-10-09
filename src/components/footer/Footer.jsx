import React, { useEffect } from 'react'
import './Footer.css'
import logo from '../../assets/Logo.svg'
import facebookicon from '../../assets/facebook-iconfooter.svg'
import instagramicon from '../../assets/instagram-iconfooter.svg'
import pinteresticon from '../../assets/pinterest-iconfooter.svg'
import tiktokicon from '../../assets/tiktok-iconfooter.svg'
import twittericon from '../../assets/twitter-iconfooter.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-down' data-aos-duration='2000' className='footer'>
        <div className="footer-one">
            <img className='logo' src={logo} alt="logo" />
            <p>Your mind should be stronger than your feeling!</p>
            <div className='socials'>
                <a href=""><img src={facebookicon} alt="" /></a>
                <a href=""><img src={twittericon} alt="" /></a>
                <a href=""><img src={instagramicon} alt="" /></a>
                <a href=""><img src={tiktokicon} alt="" /></a>
                <a href=""><img src={pinteresticon} alt="" /></a>
            </div>
        </div>
        <div className="footer-two">
            <a href=""><p className="footer-heading">Infomration</p></a>
            <a href=""><p>Home</p></a>
            <a href=""><p>Explore</p></a>
            <a href=""><p>Flight Status</p></a>
            <a href=""><p>Travel</p></a>
            <a href=""><p>Check In</p></a>
            <a href=""><p>Manage your booking</p></a>
        </div>
        <div className="footer-three">
        <a href=""><p className="footer-heading">Quick Guide</p></a>
            <a href=""><p>FAQ</p></a>
            <a href=""><p>How to</p></a>
            <a href=""><p>Favorite</p></a>
            <a href=""><p>Baggage</p></a>
            <a href=""><p>Round Map</p></a>
            <a href=""><p>Our Community</p></a>
        </div>
        <div className="footer-four">
        <a href=""><p className="footer-heading">Iykes Design</p></a>
            <a href=""><p>About Iykes</p></a>
            <a href=""><p>Corporate Sites</p></a>
            <a href=""><p>News room</p></a>
            <a href=""><p>Investor</p></a>
            <a href=""><p>Check In</p></a>
            <a href=""><p>Our Community</p></a>
        </div>
    </div>
  )
}

export default Footer