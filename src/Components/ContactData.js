import React, { useEffect, useState} from "react";
import axios from "axios";

const ContactData = () => {
  const [user, setUser] = useState([]);
  // const navigate=useNavigate()

  const showData = async () => {
    const res = await axios.get(
      "https://online-restorent.onrender.com/showcontactdata"
    );
    setUser(res.data);
    
  };

  useEffect(() => {
    showData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`https://online-restorent.onrender.com/contact/${id}`);
    showData();
  };
  const style = {
    width: "100%",
    margin: "10px",
    color: "white",
    backgroundColor: "gray",
    boxShadow: "10px 10px 10px 10px LightGray",
    overflow: "auto",
  };

  return (
    <>
      <div className="container position-relative p-3">
        <h1>Commented Data</h1>
        {Array.isArray(user) && user.map((data, index) => (
        // {user.map((data, index) => (
          <div key={index} style={style}>
            <div className="col-12 p-2" style={{ display: "flex"}}>
              <div style={{width:"98%"}}>{data.name}</div>
              <div style={{cursor: "pointer"}}>
                <button onClick={() => deleteData(data._id)} style={{color:"red"}}> X </button>
              </div>
            </div>
            <div className="col-12 p-2">{data.comment}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactData;
