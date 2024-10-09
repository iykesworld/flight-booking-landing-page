import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import menubar from '../../assets/menu.svg'
import close from '../../assets/closebar.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [navbarset, setNavbarset] = useState(false);
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu = ()=>{
        menuRef.current.style.right ='0';
    }
    const closeMenu = ()=>{
        menuRef.current.style.right ='-350px';
    }

    const changeBackground = ()=>{
        if(window.scrollY >= 80){
            setNavbarset(true);
        } else{
            setNavbarset(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
  return (
    <div className= {navbarset ? "navbar active" : "navbar"}>
        <img className='nav-logo' src={logo} alt="logo" />
        <ul ref={menuRef} className="navbar-list">
        <img src={close} onClick={closeMenu} alt="" className='close-bar' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink></li>
            <li><AnchorLink AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About</p></AnchorLink></li>
            <li><AnchorLink AnchorLink className='anchor-link' offset={50} href='#offers' onClick={()=>setMenu('offers')}><p>Offers</p></AnchorLink></li>
            <li><AnchorLink AnchorLink className='anchor-link' offset={50} href='#destination'><p onClick={()=>setMenu('destination')}>Destination</p></AnchorLink></li>
            <li id='nav-connect' className='navbar-connect-menu'><p>Connect</p></li>
            
        </ul>
        <div className='navbar-connect'><span>Connect</span></div>
        <img src={menubar} onClick={openMenu} alt="" className='menu-bar' />

    </div>
  )
}

export default Navbar