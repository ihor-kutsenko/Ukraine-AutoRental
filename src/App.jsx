import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import { appRoutes } from 'routes/routes';

// const SharedLayout = lazy(() =>
//   import('./components/SharedLayout/SharedLayout')
// );
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './components/SharedLayout/SharedLayout';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
