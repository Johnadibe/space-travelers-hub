import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelReservation } from '../../redux/rockets/rocketsSlice';
import './Rocket.css';

const Rocket = ({
  id,
  name,
  description,
  flickr_images,
  reserved,
}) => {
  const dispatch = useDispatch();

  const booking = () => {
    dispatch(bookRocket(id));
  };

  const cancellation = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <section className="container">
      <div>
        <img src={flickr_images[0]} alt="" className="rocket-img" />
      </div>

      <div className="details">
        <h3 className="rocket-header">{name}</h3>
        <p className="desc">{description}</p>
        {!reserved && (
          <button
            type="button"
            className="reserve-btn"
            onClick={booking}
          >
            Reserve Rocket
          </button>
        )}

        {reserved && (
          <button
            type="button"
            className="cancel-btn"
            onClick={cancellation}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </section>
  );
};

export default Rocket;
