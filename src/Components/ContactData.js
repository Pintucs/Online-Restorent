import React, { useEffect, useState } from "react";
import axios from "axios";
import aboutimage from "../images/about.png";

const ContactData = () => {
  const [user, setUser] = useState([]);

  const showData = async () => {
    const res = await axios.get("https://online-restorent.onrender.com/showcontactdata");
    setUser(res.data);
  };
  
  useEffect(() => {
    showData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`https://online-restorent.onrender.com/contact/${id}`);
    showData();
  };

  return (
    <>
      <div id="about">
        <div className="about-text">
         <h1>Commented Data</h1>
         {user.map((data, index) => (
          <div className="form">
            <div className="form-body">
              <table>
                
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.gmail}</td>
                    <td>{data.comment}</td>
                    <td>
                      <button
                        onClick={() => deleteData(data._id)}
                      >
                        Delete Data
                      </button>
                    </td>
                  </tr>
                
              </table>
            </div>
          </div>
          ))}
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>
      </div>
    </>
  );
};


export default ContactData;
