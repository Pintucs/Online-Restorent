import React from "react";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
function Contact(){
    return(
        <>
        <Navbar />
        <div className='body'>
        <div>
            <div className='form'>
              <div className='form-body'>
              <h2 >Send details</h2>

                <div className='form-body'>
                <input type='text' placeholder="Full Name" className="form_input"/>
                </div>
               
                <div className='form-body'>
                    <input  type="email" className='form_input' placeholder="Email"/>
                </div>
                <div className='form-body'>
                    <textarea className="form_input" placeholder="Write Here......"></textarea>
                </div>
                <div className='header-btn'>
                    <Link to='/contact'><p>Submit</p></Link>
                </div>
               </div>
            </div> 
          </div>
          </div>
            </>
            
      )     
}
export default Contact;