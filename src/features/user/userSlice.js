import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser, userBuyAsset, userSellAsset, userDepositCash } from './userAPI';

const initialState = {
  user: {},
  status: 'idle',
  error: null
};

export const getUserReducer = createAsyncThunk(
  'user/getUser',
  async () => {
      const response = await getUser();
      return response;
  }
);

export const userBuyAssetReducer = createAsyncThunk(
  'user/userBuyAsset',
  async (payload) => {
      const response = await userBuyAsset(payload);
      return response.data;
  }
);

export const userDepositCashReducer = createAsyncThunk(
  'user/userDepositCash',
  async (payload) => {
      const response = await userDepositCash(payload);
      return response.data;
  }
);

export const userSellAssetReducer = createAsyncThunk(
  'user/userSellAsset',
  async (payload) => {
      const response = await userSellAsset(payload);
      return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
      [getUserReducer.pending]: (state, action) => {
          state.status = 'loading'
      },
      [getUserReducer.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.payload
      },
      [getUserReducer.fulfilled]: (state, action) => {  
        state.status = 'succeeded'
        state.user=action.payload.data
      },
  },
});

export const { get, put, post } = userSlice.actions;

export default userSlice.reducer;