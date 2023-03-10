import React from 'react';
import { useSelector } from 'react-redux';
import './RocketsProfile.css';

const RocketsProfile = () => {
  const { rocketList } = useSelector((store) => store.rockets);
  const reservedRockets = rocketList.filter((rocket) => {
    return rocket.reserved;
  });

  return (
    <div className="rockets-container">
      <h2 className="rockets-header">My Rockets</h2>
      <ul className="rockets-list">
        {reservedRockets.map((rocket) => (
          <li>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsProfile;
