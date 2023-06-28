import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
