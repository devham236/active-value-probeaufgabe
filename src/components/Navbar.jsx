import React, { useState } from "react";
import logo from "../assets/logos/logo.png";

const Navbar = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="company-logo">
          <img src={logo} alt="company logo" />
        </div>
        <div className="menu-icon" onClick={() => setSidebarOpened(true)}>
          <span className="material-symbols-rounded">menu</span>
        </div>

        {sidebarOpened && (
          <div className="menu-sidebar">
            <ul className="menu-items">
              <li>Startseite</li>
              <li>Kontakt</li>
              <li>Impressum</li>
            </ul>
            <div className="menu-icon" onClick={() => setSidebarOpened(false)}>
              <span className="material-symbols-rounded">close</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
