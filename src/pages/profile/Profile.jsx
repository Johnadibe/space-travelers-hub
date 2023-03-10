import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ProfileCard from '../../components/profileCard/ProfileCard';
import RocketsProfile from '../../components/rocketsProfile/RocketsProfile';
import './profile.css';

const Profile = () => {
  return (
    <section>
      <Navbar />
      <div className="profile-container">
        <div className="card">
          <ProfileCard />
        </div>
        <div className="card">
          <RocketsProfile />
        </div>
      </div>
    </section>
  );
};

export default Profile;
