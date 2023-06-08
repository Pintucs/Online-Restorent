import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutimage from "../images/about.png";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const getData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = () => {
    fetch("http://localhost:4000/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((response) => response);
    });
    navigate("/");
    alert("Thank You For Registration");
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
                className="form_input"
                placeholder="Full Name"
                name="name"
                onChange={getData}
              />
            </div>
            <div className="form-body">
              <input
                type="gmail"
                className="form_input"
                placeholder="Email"
                name="gmail"
                onChange={getData}
              />
            </div>
            <div className="form-body">
              <input
                type="password"
                className="form_input"
                placeholder="Password"
                name="password"
                onChange={getData}
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
    </>
  );
}

export default Registration;
