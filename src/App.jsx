import { Route, Routes } from 'react-router-dom';
import { appRoutes } from 'routes/routes';

import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ScrollToUp from 'components/ScrollToUp/ScrollToUp';

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

      <ScrollToUp />
    </>
  );
};

export default App;
