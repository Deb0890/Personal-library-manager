import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>pbm Personal Book Manager</h1>
        </div>
        <ul className="navlist">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/books"}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              The Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
