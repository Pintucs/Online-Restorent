import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ShowData = () => {
  const [user, setUser] = useState([]);

  const showData = async () => {
    const res = await axios.get(
      "https://online-restorent.onrender.com/showData"
    );
    setUser(res.data);
  };

  useEffect(() => {
    showData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`https://online-restorent.onrender.com/user/${id}`);
    showData();
  };
  const style = {
    width: "100%",
    margin: "3px",
    color: "white",
    backgroundColor: "brown",
    boxShadow: "10px 10px 10px 10px red",
    overflow: "auto",
  };

  return (
    <>
      <Navbar />
      <div className="row m-5 pt-3">
        <h1>Show Data</h1>
        {user.map((data, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-6 p-3"
            style={{ paddingBottom: "15px" }}
          >
            <div className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.gmail}</p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(data._id)}
                  >
                    Delete Data
                  </button>
                  <Link
                    className="btn btn-secondary"
                    to={"/updatedata/" + data._id}
                  >
                    Update Data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowData;
