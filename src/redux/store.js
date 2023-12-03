import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import catalogReducer from './cars/CarsSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: catalogReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
