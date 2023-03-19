import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
const Header=() =>{
  return (
    <div id='main'>
    <Navbar />
      <div className='header-heading'>
        <h3>it's Great time</h3>
        <h1><span>BURGER</span> FOR<br/> WEEK </h1>
        <p className='details'>Pizza shop </p>
        <div className='header-btn'>
          <Link to='/registation'><p>Order</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;


