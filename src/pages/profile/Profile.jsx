import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
<<<<<<< HEAD
import RocketsProfile from '../../components/rocketsProfile/RocketsProfile';
=======
import { selectAllMissions } from '../../redux/missions/missionsSlice';
import './profile.css';
>>>>>>> 71570c5f44938d0fe4ce6d2bbc4a84f1d1948e42

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
<<<<<<< HEAD
      <section>
        <RocketsProfile />
      </section>
=======
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
>>>>>>> 71570c5f44938d0fe4ce6d2bbc4a84f1d1948e42
    </div>
  );
};

export default Profile;
