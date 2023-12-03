import { createSlice } from '@reduxjs/toolkit';
import defaultCars from '../../data/carsAdverts';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: defaultCars,
  },
  reducers: {
    setCatalogCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { setCatalogCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
