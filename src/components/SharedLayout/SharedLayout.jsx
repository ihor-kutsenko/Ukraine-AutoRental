import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
