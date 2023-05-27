import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItem, getCart } from 'components/Redux/Cart/cart';
import getBurgers from 'services/getBurgers';
import getShops from 'services/getShops';
import GoBack from 'components/GoBack/GoBack';
import ShopsList from 'components/ShopsList/ShopsList';
import Menu from 'components/Menu/Menu';
import { Section, Thumb } from './Home.styled';

const Home = () => {
  const [burgers, setBurgers] = useState([]);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

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
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getShopsList();
  }, []);

  const selectedShop = name => {
    setShops(prevState => prevState.filter(el => el.name === name));
    setBtnActive(true);
  };

  const goBackBtnHandler = async () => {
    try {
      const response = await getShops();
      if (response) {
        setShops([...response]);
        setBtnActive(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = item => {
    const checkItem = cartList.find(el => el._id === item._id);

    if (checkItem) {
      toast.error(`You have already added this item to your cart`);
      return;
    }

    dispatch(addItem({ ...item, quantity: 1 }));
    toast.success(`Your item has been added to your cart`);
  };

  return (
    <Section>
      <Thumb>
        <ShopsList shops={shops} onClick={selectedShop} />
        {btnActive && <GoBack onClick={goBackBtnHandler} />}
      </Thumb>
      <Menu array={burgers} onClick={addToCart} loading={loading} />
      <ToastContainer autoClose={1500} />
    </Section>
  );
};

export default Home;
