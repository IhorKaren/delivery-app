import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Header, Nav, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Shop</Link>
          <Link to="/order">Shopping cart</Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
