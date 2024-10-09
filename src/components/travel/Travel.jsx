import React, { useEffect } from 'react'
import './Travel.css'
import Travel_data from '../../assets/travel_data'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Travel = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' className='travel'>
        <h1>Travel to make memories all <br />
        around the world</h1>
        <div data-aos='fade-up' data-aos-duration='2000' className="travel-data">
            {Travel_data.map((data, index)=>{
                return <div className='travel-data-content'>
                    <div className="travel-icon">
                        <img src={data.t_img} alt="" />
                    </div>
                    <p className='travel-title'>{data.title}</p>
                    <p className='travel-subtitle'>{data.subtitle}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Travel