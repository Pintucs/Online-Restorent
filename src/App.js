import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ContactData from "./Components/ContactData";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);

  const loadData = async () => {
    const res = await axios.get(
      "https://online-restorent.onrender.com/"
    );
    setUser(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log(user)
  
  return (

    <div className="App">
      {
        <>
          <Navbar />
          <Header />
          <About />
          <ContactData />
        </>
      }
    </div>
  );
};

export default App;
