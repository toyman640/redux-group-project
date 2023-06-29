import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('misssions/fetchMissions', async () => {
  try {
    const response = await axios.get(GET_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const missionsSlice = createSlice({
  name: 'misssions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const payloadArray = Array.isArray(action.payload) ? action.payload : [];
      state.missions.push(
        ...payloadArray.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        })),
      );
    });
  },
});
fetchMissions();

export default missionsSlice.reducer;
