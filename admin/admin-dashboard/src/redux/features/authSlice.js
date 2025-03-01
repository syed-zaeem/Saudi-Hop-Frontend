// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, // Load from localStorage if exists
  isAuthenticated: !!localStorage.getItem('user'), // True if user exists in localStorage
  error: '', // To store login errors
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = '';
      localStorage.setItem('user', JSON.stringify(action.payload)); // Persist to localStorage
    },
    loginFailure(state, action) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = '';
      localStorage.removeItem('user'); // Clear localStorage on logout
    },
  },
});

// Export actions to dispatch them
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Export the reducer for the store
export default authSlice.reducer;