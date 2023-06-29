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
  reducers: {
    toggleMissionStatus: (state, action) => {
      const { missionId, newStatus } = action.payload;
      const mission = state.missions.find((mission) => mission.id === missionId);
      if (mission) {
        mission.status = newStatus;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const payloadArray = Array.isArray(action.payload) ? action.payload : [];
      const addMissions = payloadArray.slice(0, 7).map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        status: false,
      }));
      state.missions = addMissions;
    });
  },
});

export const { toggleMissionStatus } = missionsSlice.actions;
export default missionsSlice.reducer;
