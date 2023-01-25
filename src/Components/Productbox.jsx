import React from 'react'
import {Link} from 'react-router-dom'

function Productbox(props){
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <button className='productbox-button'><Link to='/registation'>Order Now</Link></button>
            </div>
        </div>
  )
}

export default Productbox;
