import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
  };

  return (
    <>
      <Navbar />
      <div id="aboutt">
        <div className="aboutt-text">
          <h1>Show Data</h1>
          {user.map((data, index) => (
            <table style={style}>
              <tbody>
                <tr key={index}>
                  <td style={{ width: "20%", padding: "10px" }}>{data.name}</td>
                  <td style={{ width: "20%" }}>{data.gmail}</td>
                  <td style={{ width: "20%" }}>
                    <button onClick={() => deleteData(data._id)}>
                      Delete Data
                    </button>
                  </td>
                  <td style={{ width: "20%" }}>
                    <button>
                      <Link style={{textDecoration: "none",color: "white"}}
                        to={"/updatedata/" + data._id}
                        
                      >
                        Update Data
                      </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowData;
