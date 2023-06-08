import React, { useEffect, useState } from "react";
import axios from "axios";
import aboutimage from "../images/about.png";
import Navbar from "./Navbar";
import {Link } from "react-router-dom";

const ShowData = () => {
  const [user, setUser] = useState([]);

  const showData = async () => {
    const res = await axios.get("https://online-restorent.onrender.com/showData");
    setUser(res.data);
  };

  useEffect(() => {
    showData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`https://online-restorent.onrender.com/user/${id}`);
    showData();
  };


  return (
    <>
      <Navbar />
      <div id="about">
        <div className="about-text">
          <h1>Show Data</h1>
          <div className="form">
            <div className="form-body">
              <table>
                {user.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.gmail}</td>
                    <td>
                      <button
                        onClick={() => deleteData(data._id)}
                        className="btn btn-primary"
                      >
                        Delete Data
                      </button>
                    </td>
                    <td>
                      <Link to={"/updatedata/" + data._id}>
                        Update Data
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
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

export default ShowData;
