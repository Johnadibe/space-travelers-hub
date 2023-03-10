import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { selectAllMissions } from '../../redux/missions/missionsSlice';
import RocketsProfile from '../../components/rocketsProfile/RocketsProfile';
import './profile.css';

const Profile = () => {
  const missions = useSelector(selectAllMissions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  if (joinedMissions.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="row">
          <p className="text-muted">No joined missions</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <section className="profile-container">
        <div className="profile-section">
          <h2>My Missions</h2>
          <div className="name-mission">
            {joinedMissions.map((mission) => (
              <div className="row" key={mission.id}>
                <p>{mission.missionName}</p>
              </div>
            ))}
          </div>
        </div>
        <RocketsProfile />
      </section>
    </div>
  );
};

export default Profile;
