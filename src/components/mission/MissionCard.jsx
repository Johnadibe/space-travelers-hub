import React from 'react';
import { PropTypes } from 'prop-types';

function MissionCard(props) {
  const {
    missionName, description,
  } = props;
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
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
}

MissionCard.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionCard;
