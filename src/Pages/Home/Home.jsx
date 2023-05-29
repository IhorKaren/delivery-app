import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItem, getCart, removeItem } from 'components/Redux/Cart/cart';
import getBurgers from 'services/getBurgers';
import getShops from 'services/getShops';
import ShopsList from 'components/ShopsList/ShopsList';
import Menu from 'components/Menu/Menu';
import { Section, Thumb } from './Home.styled';

const Home = () => {
  const [burgers, setBurgers] = useState([]);
  const [shops, setShops] = useState([]);
  const [activeShop, setActiveShop] = useState('');
  const [loading, setLoading] = useState(false);

  const cartList = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBurgerMenu() {
      try {
        setLoading(true);

        const response = await getBurgers();

        if (response) {
          setBurgers([...response]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getBurgerMenu();
  }, []);

  useEffect(() => {
    async function getShopsList() {
      try {
        setLoading(true);

        const response = await getShops();

        if (response) {
          setShops([...response]);
          setActiveShop(response[0].name);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getShopsList();
  }, []);

  const onSelectedShop = name => {
    setActiveShop(name);
  };

  const toggleCartItem = item => {
    const checkItem = cartList.some(
      el => el._id === item._id && el.shop === activeShop
    );

    if (checkItem) {
      dispatch(removeItem({ id: item._id, shop: activeShop }));
      toast.info('Item removed from your cart');
      return;
    }

    dispatch(addItem({ ...item, quantity: 1, shop: activeShop }));
    toast.success(`Your item has been added to your cart`);
  };

  return (
    <Section>
      <Thumb>
        <ShopsList
          shops={shops}
          activeShop={activeShop}
          loading={loading}
          onClick={onSelectedShop}
        />
      </Thumb>
      <Menu
        array={burgers}
        onClick={toggleCartItem}
        loading={loading}
        activeShop={activeShop}
      />
      <ToastContainer autoClose={1500} />
    </Section>
  );
};

export default Home;
