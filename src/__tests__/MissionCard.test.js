import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Missions from '../pages/missions/Missions';
import MissionCard from '../components/mission/MissionCard';

describe('testing snapshot with Missions', () => {
  it('testing Mission component', () => {
    const mission = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
  it('testing MissionCard component', () => {
    const missionCard = render(
      <Provider store={store}>
        <MissionCard />
      </Provider>,
    );
    expect(missionCard).toMatchSnapshot();
  });
});
