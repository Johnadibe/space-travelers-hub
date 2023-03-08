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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
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

export default missionsSlice.reducer;
