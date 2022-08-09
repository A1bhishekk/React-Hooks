import React from "react";
import { NavLink } from "react-router-dom";
import me from './logo.png'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={me} alt="" />
      </div>
      <div>
        <ul>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "aquamarine" : "" };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/hooks"
            style={({ isActive }) => {
              return { color: isActive ? "aquamarine" : "" };
            }}
          >
            Hooks
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "aquamarine" : "" };
            }}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
