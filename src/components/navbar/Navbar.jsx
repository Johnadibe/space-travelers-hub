import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/planet.png';

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="left-side">
        <img src={logoImage} alt="logo" className="logo-img" />
        <h2 className="nav-header">Space Travelers' Hub</h2>
      </div>

      <div className="right-side">
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              Rockets
            </NavLink>
          </li>
          <li className="boundary">
            <NavLink to="/missions">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
