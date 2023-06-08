import React from 'react'
import Navbar from "./Navbar";
import aboutimage from '../images/about.png'
const Login=()=>{

    return(
        <>
        <Navbar /> 
        <div id='about'>
        <div className='about-text'>
        <h1> Login here...</h1>
        <div className='form'>
              <div className='form-body'>
                  <input  type="text" className='form_input' placeholder="user Gmail"/>
              </div>
              <div className='form-body'>
                  <input type="password" className='form_input'  placeholder="Password"/>
              </div>
              <div className='form-body'>
              <button className="btn btn-primary" >Submit </button>
              </div>
            </div>
      </div>   
      <div className='about-image'>
        <img src={aboutimage} alt='' />
      </div>
      </div>
        </>
        
    )
}

export default Login