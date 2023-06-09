import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reg.css";

const PosstData = () => {
  const [user, setUser] = useState([]);
  const getData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = () => {
    fetch("https://online-restorent.onrender.com/get", {
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
      <div className="body">
        <div>
          <div>
            <div className="form-body">
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  onChange={getData}
                  style={style}
                />
              </div>
              <div className="header-btn">
                <Link to="/showdata" onClick={postData}>
                  <p>Add Data</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosstData;
