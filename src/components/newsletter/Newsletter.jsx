import React, { useEffect } from 'react'
import './Newsletter.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Newsletter = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' className='newsletter'>
        <h1 data-aos='fade-right' data-aos-duration='2500' >FIND SPECIAL PRICES <br />
            TO FAVORITE <br />
            DESTINATIONS</h1>
            <p>Special Offer</p>
            <h2>40% off Prices</h2>
            <div className='newsletter-input'>
                <h3>Subscribe Newsletters & get Latest News</h3>
                <div className='newsletter-input-mail'>
                    <input type="text" placeholder='Enter Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
    </div>
  )
}

export default Newsletter