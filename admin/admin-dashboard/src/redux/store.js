// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // 'auth' will be the key to access this slice in the state
  },
});