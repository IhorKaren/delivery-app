import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import SimpleContainer from './Container/Container';

const Home = lazy(() => import('../Pages/Home/Home'));
const ShoppingCart = lazy(() => import('../Pages/ShoppingCart/ShoppingCart'));

export const App = () => {
  return (
    <SimpleContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/order" element={<ShoppingCart />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SimpleContainer>
  );
};
