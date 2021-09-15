import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import assetReducer from '../features/asset/assetSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    asset: assetReducer
  },
});
