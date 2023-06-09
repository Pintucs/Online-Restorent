import React, { useState } from "react";
import Alert from './PopUp';
const Productbox = (props) => {
  const [showModal, setShowModal] = useState(false);
  const order=()=>{
    setShowModal(true)
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
