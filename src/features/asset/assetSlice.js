import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAssets } from './assetAPI';

const initialState = {
    asset: {},
    status: 'idle',
    error: null
};

export const getAssetReducer = createAsyncThunk(
    'asset/getAsset',
    async () => {
        const response = await getAssets();
        return response;
    }
);


export const AssetSlice = createSlice({
    name: 'asset',
    initialState,
    extraReducers: {
        [getAssetReducer.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getAssetReducer.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [getAssetReducer.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            debugger
            state.asset = action.payload.data
        },
    },
});

export default AssetSlice.reducer;