import React, { useEffect } from 'react'
import './Home.css'
import video from '../../assets/videotwo.mp4'
import airplane from '../../assets/airplane.png'
import facebookIcon from '../../assets/facebook-icon.svg'
import instgramIcon from '../../assets/instagram-icon.svg'
import pinterestIcon from '../../assets/pinterest-icon.svg'
import tiktokIcon from '../../assets/tiktok-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    
    <div id='home' className='home'>
        <h1 data-aos='fade-up' data-aos-duration='2000'>Stress-Free Travel <br />
        Starts Here!
        </h1>
        <div data-aos='fade-down' data-aos-duration='2000' className="home-images-videos">
            <div className="home-video">
                <video src={video} autoPlay muted loop className='video'></video>
            </div>
            <img className='plane' src={airplane} alt="airplane image" />
        </div>
        <span>Book affordable flights to top destinations worldwide. Start your journey today.</span>
            <div className="home-icons">
                <a href=""><img src={facebookIcon} alt="" /></a>
                <a href=""><img src={twitterIcon} alt="" /></a>
                <a href=""><img src={instgramIcon} alt="" /></a>
                <a href=""><img src={tiktokIcon} alt="" /></a>
                <a href=""><img src={pinterestIcon} alt="" /></a>
            </div>
            
    </div>
  )
}

export default Home