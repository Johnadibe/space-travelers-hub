import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocketList: [],
  status: 'idle',
};

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, { payload }) => {
      const reservedRocket = state.rocketList.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      state.rocketList = [...reservedRocket];
    },
    cancelReservation: (state, { payload }) => {
      const reservedRocket = state.rocketList.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload[key]);
        });
        state.rocketList = [...tempArray];
        state.status = 'loaded';
      });
  },
});

export const { bookRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
