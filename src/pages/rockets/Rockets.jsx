import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Rocket from '../../components/rocket/Rocket';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const { rocketList, status } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <div>
      <Navbar />
      <section className="rockets-container">
        {rocketList.map((item) => (
          <Rocket key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Rockets;
