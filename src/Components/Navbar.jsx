import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/logo1.png';
import Timeduration from './Timeduration';

function Navbar(){
    const[nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return(
        <nav className={nav ? "nav active" : "nav"}>
        <Timeduration />
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'>
                </span>
            </label>
            <ul className='menu'>
                <li><Link to="/" smooth={true} duration={2000}>🏡</Link></li>
                <li><Link to="/header" smooth={true} duration={2000}>Header</Link></li>
                <li><Link to="/products" smooth={true} duration={2000}>Product</Link></li>
                <li><Link to="/about" smooth={true} duration={2000}>About</Link></li>
                <li><Link to="/contact" smooth={true} duration={2000}>Contact</Link></li>
                <li><Link to="/login" smooth={true} duration={2000}>Login</Link></li>
                <li><Link to="/registation" smooth={true} duration={2000}>Registation</Link></li>
                <li><Link to="/live" smooth={true} duration={2000}>Covid Live 🔴</Link></li>
                <li><Link to="/ShowData" smooth={true} duration={2000}>ShowData</Link></li>
            </ul>
        </nav>
    )
    }

export default Navbar;