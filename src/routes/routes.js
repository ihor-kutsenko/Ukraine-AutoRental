import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

export const HOME_ROUTE = '/';
export const CATALOG_ROUTE = '/catalog';
export const FAVORITES_ROUTE = '/favorites';

export const appRoutes = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: CATALOG_ROUTE,
    element: <CatalogPage />,
  },
  {
    path: FAVORITES_ROUTE,
    element: <FavoritesPage />,
  },
];
