import React, { useEffect } from 'react'
import './Offer.css'
import offerimage from '../../assets/offer-image-group.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const offer_data = [
    {
        id: "01",
        title: "Travel requirement for Singapore",
        subtitle: "Find help with booking and travel plans, see what to expect along the journey to your favorite destination",
    },
    {
        id: "02",
        title: "Chaffeur Services at your arrival",
        subtitle: "Find help with booking and travel plans, see what to expect along the journey to your favorite destination",
    },
    {
        id: "03",
        title: "Multi-risk travel insurance",
        subtitle: "Find help with booking and travel plans, see what to expect along the journey to your favorite destination",
    }
];

const Offer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' id='offers' className='offer'>
        <div className="offer-top">
            <h2 className='offer-title'>WE OFFER</h2>
            <p>TRAVEL SUPPORT</p>
            <h2 className='offer-top-heading'>Plan your travel with confidence</h2>
            <span>We partner with leading airlines to provide competitive rates, so you always get the best deal.</span>
        </div>
        <div className="offer-bottom">
            <div className="offer-bottom-left">
                {offer_data.map((offers, index)=>{
                    return <div data-aos='fade-left' data-aos-duration='2000' key={index} className='offer-left-content'>
                        <p className='offer-left-number'>{offers.id}</p>
                        <p className='offer-left-title'>{offers.title}</p>
                        <p className='offer-left-subtitle'>{offers.subtitle}</p>
                    </div>
                })}
            </div>
            <div className='offer-image' data-aos='fade-right' data-aos-duration='2000' ><img src={offerimage} alt="offer image" /></div>
            
        </div>
    </div>
  )
}

export default Offer