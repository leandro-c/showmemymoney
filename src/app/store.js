import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import assetReducer from '../features/asset/assetSlice';
import http from "../features/commonhttp"///features/commonhttp";
/* export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    asset: assetReducer
  },
}); */

export const store = configureStore({
  reducer:  {
    counter: counterReducer,
    user: userReducer,
    asset: assetReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: http,
      },
      serializableCheck: false,
    }),
})