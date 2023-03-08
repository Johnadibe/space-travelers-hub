import React from 'react';
import spaceIcon from '../../assets/planet.png';
import './Rocket.css';

const Rocket = () => {
  return (
    <section className="container">
      <div>
        <img src={spaceIcon} alt="" className="rocket-img" />
      </div>

      <div className="details">
        <h3 className="rocket-header">Falcon 1</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Saepe ea dolorem facilis laboriosam voluptate! Blanditiis
          soluta repudiandae, magnam, sit fuga nam praesentium iusto
          nisi recusandae, hic veniam aut maxime modi!
        </p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </section>
  );
};

export default Rocket;
