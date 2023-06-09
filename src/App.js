import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      {
        <>
          <Navbar />
          <Header />
          <Products />
          <About />
        </>
      }
    </div>
  );
};

export default App;
