import React, { useEffect } from 'react';
import './Destination.css';
import Destination_data from '../../assets/destination_data';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Destination = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2500' id='destination' className='destination'>
        <div className="destination-heading">
            <h2 className='d-heading'>DESTINATION</h2>
            <h2 className='d-sub'>Top Travelers of this month!</h2>
        </div>
        <div className="destination-body-container">
            {Destination_data.map((data,index)=>{
                return <div key={index} className='destination-single-data'>
                    <img src={data.tr_img} className='destination-image' alt="destination image" />
                    <div className="destination-single-details">
                        <img className='destination-imagetwo' src={data.tr_imgpass} alt="image" />
                        <div className="destination-single-name">
                            <p className='name'>{data.title}</p>
                            <p className='location'>{data.subtitle}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
        
    </div>
  )
}

export default Destination