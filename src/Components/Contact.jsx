import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutimage from "../images/about.png";
import ContactData from "./ContactData";

const Contact = () => {
  const [user, setUser] = useState([]);
  const [fs, setFs] = useState(false);
  const getData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = () => {
    fetch("https://online-restorent.onrender.com/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((response) => response);
    });
  };
  const showComments = () => {
    setFs(true);
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
          <h1> Send details</h1>
          <div className="form">
            <div className="form-body">
              <input
                type="text"
                className="form_input"
                placeholder="Full Name"
                name="name"
                onChange={getData}
                style={style}
              />
            </div>
            <div className="form-body">
              <input
                type="gmail"
                className="form_input"
                placeholder="Email"
                name="gmail"
                onChange={getData}
                style={style}
              />
            </div>
            <div className="form-body">
              <textarea
                className="form_input"
                placeholder="Write Here......"
                name="comment"
                onChange={getData}
                style={style}
              ></textarea>
            </div>
            <div className="form-body">
              <button onClick={postData}>Submit </button>
              <button onClick={showComments}>View Comments </button>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>
      </div>
      {fs ? <ContactData /> : null}
    </>
  );
};
export default Contact;
