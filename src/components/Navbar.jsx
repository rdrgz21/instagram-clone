import React, { Component } from "react";
import "./Navbar.css";
import insta_logo from "../images/insta_logo.png";
import house_icon from "../images/svg6.svg";
import plane_icon from "../images/svg7.svg";
import compass_icon from "../images/svg8.svg";
import heart_icon from "../images/svg9.svg";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo-wrapper">
          <img src={insta_logo} id="logo" alt="" />
        </div>
        <div className="search">
          <input className="search-field" type="text" placeholder="🔍  Search" />
        </div>
        <div className="nav-wrapper">
          <img src={house_icon} className="icon" id="house" alt="" />
          <img src={plane_icon} className="icon" id="plane" alt="" />
          <img src={compass_icon} className="icon" id="compass" alt="" />
          <img src={heart_icon} className="icon" id="heart" alt="" />
          <img src="https://i.imgur.com/XHjSg5r.jpg" className="icon" id="profile" alt="" />
        </div>
      </nav>
    );
  }
}