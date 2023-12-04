import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
