import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';
import Home from '../Pages/Home';
import ShoppingCart from 'Pages/ShoppingCart';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/order" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Container>
  );
};
