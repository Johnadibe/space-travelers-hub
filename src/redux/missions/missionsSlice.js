import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error.message;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinAndLeaveMission: (state, action) => {
      const newArr = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          if (mission.reserved === true) {
            return { ...mission, reserved: false };
          }
          return { ...mission, reserved: true };
        }
        return ({ ...mission });
      });
      return { ...state, missions: newArr };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const newState = { ...state };
        const missionList = [];
        action.payload.forEach((mission) => {
          const missionObj = {
            id: mission.mission_id,
            missionName: mission.mission_name,
            description: mission.description,
            reserved: false,
          };
          missionList.push(missionObj);
        });
        newState.missions = missionList;
        newState.status = 'succeeded';
        return newState;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllMissions = (state) => state.missions.missions;
export const getMissionsStatus = (state) => state.missions.status;
export const getMissionserror = (state) => state.missions.error;

export const { joinAndLeaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
