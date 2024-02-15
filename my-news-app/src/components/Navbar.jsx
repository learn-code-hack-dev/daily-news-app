import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  toggleNavbar = () => {
    const nav = document.getElementById("nav");
    const nav__list = document.getElementById("nav__list");
    nav__list.classList.toggle("hide");
    nav.classList.toggle("nav_resp");
  };

  render() {
    return (
      <header>
        <nav className="nav" id="nav">
          <div className="logo">
            <Link className="nav_heading" to="/">
              <img src="https://www.logoai.com/img/logo-icons/logoai.svg" alt="LOGO" />
            </Link>
          </div>
          <div>
            <ul className="nav__list" id="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/news" className="nav__link">
                  News
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="ham__burger"
            onClick={this.toggleNavbar}
            id="ham__burger"
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    );
  }
}
