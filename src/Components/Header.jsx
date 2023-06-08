import React from 'react'
import Navbar from './Navbar';
const Header=() =>{
  return (
  <>
    <Navbar />
    <div id='main'>
      <div className='header-heading'>
        <h3>it's Great time</h3>
        <h1><span>BURGER</span> FOR<br/> WEEK </h1>
        <p className='details'>Pizza shop </p>
        <div className='about-text' >
          <button className='productbox-button'>Order Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header;


