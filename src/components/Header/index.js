import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>pbm Personal Book Manager</h1>
        </div>
        <ul className="navlist">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">The library</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
