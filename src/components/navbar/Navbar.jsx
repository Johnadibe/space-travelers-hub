import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <section className="navbar">
    <div className="left-side">
      <img src="../assets/planet.png" alt="logo" className="logo-img" />
      <h2 className="nav-header">Space Travelers' Hub</h2>
    </div>

    <div className="right-side">
      <ul className="nav-links">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </div>
  </section>
);

export default Navbar;
