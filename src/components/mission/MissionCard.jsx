import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinAndLeaveMission } from '../../redux/missions/missionsSlice';

function MissionCard(props) {
  const {
    id, missionName, description,
  } = props;
  const dispatch = useDispatch();
  return (
    <tr>
      <th className="mission_name">{missionName}</th>
      <td className="description">
        {description}
      </td>
      <td className="member-block">
        <button type="button">Not a Member</button>
        <button type="button" className="active">Active Member</button>
      </td>
      <td className="member-join">
        <button
          type="button"
          onClick={() => dispatch(joinAndLeaveMission(id))}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
}

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionCard;
