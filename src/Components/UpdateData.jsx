import React, {useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import aboutimage from "../images/about.png";
import {useParams, useNavigate } from "react-router-dom";

const UpdateData = ({id}) => {
    const [name, setName] = useState();
    const [gmail, setGmail] = useState();
    const [password, setPassword] = useState();
    const navigate  = useNavigate()
    const params=useParams()

    const getProduct = useCallback(async () => {
      let result = await fetch(`https://online-restorent.onrender.com/user/${params.id}`)
      result = await result.json()
      console.log(result)
      setName(result.name);
      setGmail(result.gmail);
      setPassword(result.password);
    }, [params.id, setName, setGmail, setPassword]);

    useEffect(() => {
      getProduct();
    }, [getProduct]);

    const updatedata= async()=> {
            let result = await fetch(`https://online-restorent.onrender.com/user/${params.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name,gmail,password}),
            });
            let add = await result.json();
            console.log(add)
            navigate('/showdata')
            }

  return (
    <>
    <Navbar />
      <div id="about">
        <div className="about-text">
        <h1>Update data</h1>
          <div className="form">
          <div className="form-body">
          <input
            type="text"
            className="form_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-body">
          <input
            type="gmail"
            className="form_input"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div className="form-body">
          <input
            type="password"
            className="form_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-body">
          <button onClick={updatedata}>Update here</button>
        </div>
      </div>
      </div>
      <div className="about-image">
            <img src={aboutimage} alt="" />
          </div>
      </div>
    </>
  );
};

export default UpdateData;
