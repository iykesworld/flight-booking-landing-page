import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonypage.css';
import Testimony_data from '../../assets/testimony.js';
import Card from '../card/Card.jsx';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonypage = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div data-aos='fade-right' data-aos-duration='2500' className="destination-testimony">
            <p>This is why passengers love Iykes Flight </p>
            <div className="destinatoin-testimony-wrapper">
            <Slider {...settings}>
                {Testimony_data.map((data,index)=>{
                    return <Card key={index} data={data} />
                })}
                </Slider>
            </div>
        </div>
  )
}

export default Testimonypage;