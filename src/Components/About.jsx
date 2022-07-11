import React from 'react';
import aboutimage from '../images/about.png'
import Navbar from './Navbar';

function About(){
  return (
    <>
    <Navbar />,
    <div id='about'>
    <div className='about-text'>
        <h1> Upcomming event</h1>
        <p>You can order any thing</p>
        <button>Read more </button>
    </div>
    <div className='about-image'>
        <img src={aboutimage} alt='' />
    </div>
    </div>
    </>
  )
}

export default About;