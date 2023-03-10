import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../../redux/missions/missionsSlice';
import './ProfileCard.css';

const ProfileCard = () => {
  const missions = useSelector(selectAllMissions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  if (joinedMissions.length === 0) {
    return (
      <div>
        <div className="row">
          <p className="text-muted">No joined missions</p>
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default ProfileCard;
