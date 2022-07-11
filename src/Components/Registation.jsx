import React from 'react'
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
import './reg.css'
function Registation(){
    return(
      <>
      <Navbar />
      <div className='body'>
      <div>
          <div className='form'>
            <div className='form-body'>
              <div className='form-body'>
                  <input  type="text" className='form_input' placeholder="First Name"/>
              </div>
              <div className='form-body'>
                  <input  type="text" className='form_input' name="" placeholder="LastName"/>
              </div>
              <div className='form-body'>
                  <input  type="email" className='form_input' placeholder="Email"/>
              </div>
              <div className='form-body'>
                  <input type="password" className='form_input'  placeholder="Password"/>
              </div>
              <div className='form-body'>
                  <input type="password" className='form_input' placeholder="Confirm Password"/>
              </div>
          
              <div className='header-btn'>
                  <Link to='/login'><p>Registation</p></Link>
              </div>
             </div>
          </div> 
        </div>
        </div>
          </>
          
    )     
}

export default Registation