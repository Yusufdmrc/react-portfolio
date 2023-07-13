import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav-menu show-menu" : "nav-menu"}`}>
        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav-toggle animation-toggle" : "nav-toggle"}`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
