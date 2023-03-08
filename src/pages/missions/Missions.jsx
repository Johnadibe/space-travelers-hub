import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllMissions, getMissionsStatus, getMissionserror, fetchMissions,
} from '../../redux/missions/missionsSlice';
import Navbar from '../../components/navbar/Navbar';
import MissionCard from '../../components/mission/MissionCard';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector(selectAllMissions);
  const missionStatus = useSelector(getMissionsStatus);
  const missionError = useSelector(getMissionserror);

  useEffect(() => {
    if (missionStatus === 'idle') {
      dispatch(fetchMissions());
    }
  }, [missionStatus, dispatch]);

  let content;
  if (missionStatus === 'loading') {
    content = (
      <tr className="loader">
        <td>
          <p>
            Loading...
          </p>
        </td>
      </tr>
    );
  } else if (missionStatus === 'succeeded') {
    content = missions.map((mission) => (
      <MissionCard
        key={mission.mission_id}
        missionName={mission.mission_name}
        description={mission.description}
      />
    ));
  } else if (missionStatus === 'failed') {
    content = <p>{missionError}</p>;
  }

  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
