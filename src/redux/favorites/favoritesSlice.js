import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteArray: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favoriteArray.push(payload);
    },
    deleteFromFavorites: (state, { payload }) => {
      state.favoriteArray = state.favoriteArray.filter(
        car => car.id !== payload.id
      );
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
