import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const deleteData = async (id) => {
    await axios.delete(`https://online-restorent.onrender.com/contact/${id}`);
    showData();
  };
  const style = {
    margin: "3px",
    color: "white",
    backgroundColor: "brown",
    boxShadow: "10px 10px 10px 10px red",
  };
  return (
    <>
      <div id="aboutt">
        <div className="aboutt-text">
          <h1>Commented Data</h1>
          {user.map((data, index) => (
            <table style={style}>
              <tr key={index}>
                <td style={{ width: "16%", color: "black" }}>{data.name}</td>
                <td style={{ width: "16%", color: "black" }}>{data.gmail}</td>
                <td style={{ width: "50%", padding: "10px", color: "black" }}>
                  {data.comment}
                </td>
                <td>
                  <button onClick={() => deleteData(data._id)}>
                    Delete Data
                  </button>
                </td>
              </tr>
              <tr></tr>
            </table>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactData;
