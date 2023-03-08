import React from 'react';
import './Rocket.css';

const Rocket = ({
  name,
  description,
  flickr_images,
}) => {
  return (
    <section className="container">
      <div>
        <img src={flickr_images[0]} alt="" className="rocket-img" />
      </div>

      <div className="details">
        <h3 className="rocket-header">{name}</h3>
        <p className="desc">{description}</p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </section>
  );
};

export default Rocket;
