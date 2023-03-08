import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Rocket from '../../components/rocket/Rocket';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

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
      <section>
        {rocketList.map((item) => (
          <Rocket key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Rockets;
