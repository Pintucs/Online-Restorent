import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
import Navbar from "./Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <div id="products">
        <h1>Choose & Enjoy</h1>
        <div className="a-container" >
          <Productbox image={pimage1} title="Luger Burger" style={{width:"25%"}}/>
          <Productbox image={pimage2} title="Spacial Burger" style={{width:"25%"}}/>
          <Productbox image={pimage2} title="Spacial Burger" style={{width:"25%"}}/>
          <Productbox image={pimage2} title="Spacial Burger" style={{width:"25%"}}/>
        </div>
      </div>
    </>
  );
};

export default Products;
