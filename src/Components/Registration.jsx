import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutimage from "../images/about.png";
import Alert from './PopUp';
function Registration() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  const getData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = () => {
    fetch("https://online-restorent.onrender.com/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((response) => response);
    });
    // alert("Thank You For Registration")
    setShowModal(true);
    
  };
  const style = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
    margin: "8px",
  };

  return (
    <>
      <Navbar />
      <div id="about">
        <div className="about-text">
          <h1> Register now</h1>
          <div className="form">
            <div className="form-body">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={getData}
                style={style}
              />
            </div>
            <div className="form-body">
              <input
                type="gmail"
                placeholder="Email"
                name="gmail"
                onChange={getData}
                style={style}
              />
            </div>
            <div className="form-body">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={getData}
                style={style}
              />
            </div>
            <div className="form-body">
              <button onClick={postData}>Registration</button>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>
      </div>
      <Alert showModal={showModal} TextLable="Registration Successful" />
    </>
  );
}

export default Registration;
