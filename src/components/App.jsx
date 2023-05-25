import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home'));
const ShoppingCart = lazy(() => import('../Pages/ShoppingCart'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/order" element={<ShoppingCart />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};
