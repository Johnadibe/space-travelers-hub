import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rocketsSlice';
import './Rocket.css';

const Rocket = ({
  id,
  name,
  description,
  flickr_images,
}) => {
  const dispatch = useDispatch();

  const booking = () => {
    dispatch(bookRocket(id));
  };

  return (
    <section className="container">
      <div>
        <img src={flickr_images[0]} alt="" className="rocket-img" />
      </div>

      <div className="details">
        <h3 className="rocket-header">{name}</h3>
        <p className="desc">{description}</p>
        <button
          type="button"
          className="reserve-btn"
          onClick={booking}
        >
          Reserve Rocket
        </button>
      </div>
    </section>
  );
};

export default Rocket;
