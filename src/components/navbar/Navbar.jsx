import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/planet.png';

const Navbar = () => {
  const navigation = useNavigate();

  const handleRocketsPage = () => {
    navigation('/');
  };

  const handleMissionsPage = () => {
    navigation('/missions');
  };

  const handleProfilePage = () => {
    navigation('/profile');
  };

  return (
    <section className="navbar">
      <div className="left-side">
        <img src={logoImage} alt="logo" className="logo-img" />
        <h2 className="nav-header">Space Travelers' Hub</h2>
      </div>

      <div className="right-side">
        <ul className="nav-links">
          <li onClick={handleRocketsPage}>Rockets</li>
          <li onClick={handleMissionsPage} className="boundary">Missions</li>
          <li onClick={handleProfilePage}>My Profile</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
