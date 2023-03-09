import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
// import Badge from 'react-bootstrap/Badge';
// import { joinAndLeaveMission } from '../../redux/missions/missionsSlice';
// import { Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

function MissionCard(props) {
  const {
    id, missionName, description, reserved,
  } = props;
  const dispatch = useDispatch();
  return (
    <tr>
      <th className="mission_name">{missionName}</th>
      <td className="description">
        {description}
      </td>
      <td className="member-block">
        <span
          className={reserved ? 'active' : 'not-active'}
        >
          {reserved ? 'Active Member' : 'Not A MEMBER'}
        </span>
      </td>
      <td className="member-join">
        <button
          type="button"
          className={reserved ? 'outline-danger' : 'outline-secondary'}
          onClick={reserved ? () => { dispatch(leaveMission(id)); }
            : () => { dispatch(joinMission(id)); }}
        //   onClick={() => dispatch(joinAndLeaveMission(id))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionCard;
