import React from 'react'
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
import './reg.css'
const Login=()=>{

    return(
        <>
        <Navbar /> 
       <div className='body'>
          <div className='form'>
            <div className='form-body'>
              <div className='form-body'>
              <h2 >Login here...</h2>
                  <input  type="text" className='form_input' placeholder="user Gmail"/>
              </div>
              <div className='form-body'>
                  <input type="password" className='form_input'  placeholder="Password"/>
              </div>
              <div className='header-btn'>
                <Link to='/'><p>Login</p></Link>
              </div>
            </div>
          </div> 
        </div>

        </>
        
    )
}

export default Login