import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Profile from '../pages/profile/Profile';
import ProfileCard from '../components/profileCard/ProfileCard';
import RocketsProfile from '../components/rocketsProfile/RocketsProfile';

describe('testing snapshot with Profile', () => {
  it('testing Profile component', () => {
    const profile = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });
  it('testing ProfileCard component', () => {
    const profileCard = render(
      <Provider store={store}>
        <ProfileCard />
      </Provider>,
    );
    expect(profileCard).toMatchSnapshot();
  });
  it('testing RocketsProfile component', () => {
    const rocketsProfile = render(
      <Provider store={store}>
        <RocketsProfile />
      </Provider>,
    );
    expect(rocketsProfile).toMatchSnapshot();
  });
});
