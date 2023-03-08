import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from '../rockets/rocketsSlice';
import missionReducer from '../missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionReducer,
  },
});

export default store;
