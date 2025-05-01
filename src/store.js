import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import projectReducer from './features/projectSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer
  }
});