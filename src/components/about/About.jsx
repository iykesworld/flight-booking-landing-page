import React, { useEffect } from 'react'
import './About.css'
import airplane from '../../assets/airplane2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='2000' id='about' className='about'>
        <h2>ABOUT US</h2>
        <h1>AT <span>IYKES FLIGHT</span></h1>
        <h1>WE BELIEVE THAT FLIGHT SHOULD BE SIMPLE, ACCESSIBLE AND ENJOYABLE</h1>
        <div data-aos='fade-down' data-aos-duration='2000' ><img src={airplane} alt="airplane image" /></div>
        <span className='about-span'>We are passionate about connecting people to the world with ease, offering seamless flight booking experiences
        that cater to travelers’ needs—whether for business or leisure.</span>
    </div>
  )
}

export default About