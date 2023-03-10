import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import RocketsProfile from '../../components/rocketsProfile/RocketsProfile';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <section>
        <RocketsProfile />
      </section>
    </div>
  );
};

export default Profile;
