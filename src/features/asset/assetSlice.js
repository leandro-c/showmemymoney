import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAssets, getAsset } from './assetAPI';

const initialState = {
    asset: [],
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

export const getAsseByIdtReducer = createAsyncThunk(
    'asset/ getAsseById',
    async () => {
        const response = await getAsset();
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
            state.error = action.payload.status
        },
        [getAssetReducer.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.asset = action.payload.data
        },
        [getAsseByIdtReducer.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getAsseByIdtReducer.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.status
        },
        [getAsseByIdtReducer.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.asset = action.payload.data
        },
    },
});

export default AssetSlice.reducer;