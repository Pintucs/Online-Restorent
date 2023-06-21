import React, { useEffect, useState } from "react";

import Alert from './PopUp';
import { useNavigate } from "react-router-dom";
const Productbox = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate()
  const Auth = localStorage.getItem("user");
  useEffect(() => {
    console.log(Auth);
  }, [Auth]);
  
  const order=()=>{
    if(Auth){
      setShowModal(true)
    }
    else{
      navigate("/registration")
    }
  }
  return (
    <>
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <button className="productbox-button" onClick={order}>Order Now</button>
      </div>
    </div>
    <Alert showModal={showModal} TextLable="Order Successful. thank you for purchase !!!" />
    </>
  );
};

export default Productbox;
