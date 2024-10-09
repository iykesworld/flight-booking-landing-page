import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Travel from './components/travel/Travel'
import Booking from './components/booking/Booking'
import Offer from './components/offer/Offer'
import Destination from './components/destination/Destination'
import Testimonypage from './components/testimonypage/Testimonypage'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <div className="bg"><Navbar/>
      <Home />
      <Booking/>
      <About />
      <Offer/>
      <Travel />
      <Destination/>
      <Testimonypage/>
      <Newsletter/>
      <Footer/>
      </div>
      
      
    </div>
  )
}

export default App