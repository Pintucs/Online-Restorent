import React,{useState} from "react";
import aboutimage from "../images/about.png";
import Navbar from "./Navbar";
import Alert from './PopUp';

function About() {
  const [showModal, setShowModal] = useState(false);
  const a=()=>{
    setShowModal(true);
  }
  return (
    <>
      <Navbar />
      <div id="about">
        <div className="about-text">
          <h1> Upcoming event</h1>
          <p>You can order any thing</p>
          <button onClick={a}>Read more </button>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>
      </div>
      <Alert showModal={showModal} TextLable="Thank you for your response !!!" />
    </>
  );
}

export default About;
