import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import Timeduration from "./Timeduration";

function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Timeduration />
      <Link to="/" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/" smooth={true} duration={2000}>
            🏡
          </Link>
        </li>
        <li>
          <Link to="/about" smooth={true} duration={2000}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" smooth={true} duration={2000}>
            Contact
          </Link>
        </li>
        {/* <li><Link to="/login" smooth={true} duration={2000}>Login</Link></li> */}
        <li>
          <Link to="/registration" smooth={true} duration={2000}>
          Registration
          </Link>
        </li>
        <li>
          <Link to="/ShowData" smooth={true} duration={2000}>
            ShowData
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
