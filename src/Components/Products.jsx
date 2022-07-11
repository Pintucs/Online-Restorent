import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import Navbar from './Navbar';



function Products(){
  return (
    <>
    <Navbar />
    <div id='products'>
    <h1>Choose & Enjoy</h1>
    <p>Order Now</p>
      <div className='a-container'>
        <Productbox image={pimage1} title="Luger Burger" />
        <Productbox image={pimage2} title="Luger Burger" />
      </div>
    </div>
    </>
  )
}

export default Products;