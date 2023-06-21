import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";

const ContactData = () => {
  const [user, setUser] = useState([]);

  const showData = async () => {
    const res = await axios.get(
      "https://online-restorent.onrender.com/showcontactdata"
    );
    setUser(res.data);
  };

  useEffect(() => {
    showData();
  }, []);

  // const deleteData = async (id) => {
  //   await axios.delete(`https://online-restorent.onrender.com/contact/${id}`);
  //   showData();
  // };
  const style = {
    width: "100%",
    margin: "10px",
    color: "white",
    backgroundColor: "gray",
    boxShadow: "10px 10px 10px 10px LightGray",
    overflow: "auto"

  };
  return (
    <>
      <div className="container position-relative p-3">
          <h1>Commented Data</h1>
          {user.map((data, index) => (
            <div key={index} style={style}>
            <div className="col-12 col-sm-6 p-2"><b>{data.name}</b></div>
            <div className="col-12 p-2">{data.comment}</div>
            {/* <div className="col-12 col-sm-3">{data.gmail}</div> */}
            {/* <div className="col-12 col-sm-3">
            <Button onClick={() => deleteData(data._id)}>
             Delete Data
            </Button>
            </div> */}
          </div>
          ))}
        </div>
    </>
  );
};

export default ContactData;
