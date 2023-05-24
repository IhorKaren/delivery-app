import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getBurgers from 'services/getBurgers';
import getShops from 'services/getShops';
import ShopsList from 'components/ShopsList/ShopsList';
import Menu from 'components/Menu/Menu';
import { addItem, getCart } from 'components/Redux/Cart/cart';
import { Section } from './Pages.styled';

const Home = () => {
  const [burgers, setBurgers] = useState([]);
  const [shops, setShops] = useState([]);

  const cartList = useSelector(getCart);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      async function getBurgerMenu() {
        const response = await getBurgers();

        if (response) {
          setBurgers([...response]);
        }
      }

      getBurgerMenu();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      async function getShopsList() {
        const response = await getShops();

        if (response) {
          setShops([...response]);
        }
      }

      getShopsList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToCart = item => {
    const checkItem = cartList.find(el => el._id === item._id);

    if (checkItem) {
      return;
    }

    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <Section>
      <ShopsList shops={shops} />
      <Menu burgers={burgers} onClick={addToCart} />
    </Section>
  );
};

export default Home;
