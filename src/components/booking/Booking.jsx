import React, { useEffect } from 'react'
import './Booking.css'
import checkouticon from '../../assets/check-out-icon.svg'
import locationicon from '../../assets/location-icon.svg'
import travelicon2 from '../../assets/travel-icon2.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Booking = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' className='booking'>
        <div data-aos='fade-up' data-aos-duration='2500' className="booking-class">
        <div className="class">Economy</div>
        <div className="class">Business Class</div>
        <div className="class">First Class</div>
        </div>
        <div className="booking-content-wrapper">
            <div className="booking-content">
                <div className="icon"><img src={locationicon} alt="" /></div>
                <div className="icon-content">
                    <p>Location</p>
                    <select name="" id="">
                        <option value="">Where do you want to go</option>
                        <option value="">New York</option>
                        <option value="">London</option>
                        <option value="">Abuja</option>
                        <option value="">Paris</option>
                        <option value="">Bangkok</option>
                        <option value="">Mecca</option>
                        <option value="">California</option>
                    </select>
                </div>
            </div>
            <div className="booking-content">
                <div className="icon"><img src={travelicon2} alt="" /></div>
                <div className="icon-content">
                    <p>Travelers</p>
                    <select name="" id="" required>
                        <option value="">Add Guest</option>
                        <option value="">1 Person</option>
                        <option value="">2 Person</option>
                        <option value="">3 Person</option>
                        <option value="">4 Person</option>
                    </select>
                </div>
            </div>
            <div className="booking-content">
                <div className="icon"><img src={checkouticon} alt="" /></div>
                <div className="icon-content">
                    <p>Check In</p>
                    <input required type="date" />
                </div>
            </div>
            <div className="booking-content">
                <div className="icon"><img src={checkouticon} alt="" /></div>
                <div className="icon-content">
                    <p>Check Out</p>
                    <input type="date" />
                </div>
            </div>
            <div className="search-flight">Search Flight</div>
        </div>
    </div>
  )
}

export default Booking