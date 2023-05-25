import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCart,
  changeQuantity,
  removeItem,
} from 'components/Redux/Cart/cart';
import sendOrder from 'services/sendOrder';
import OrderForm from 'components/OrderForm/OrderForm';
import Cart from 'components/Cart/Cart';
import TotalPrice from 'components/TotalPrice/TotalPrice';
import { Section } from './Pages.styled';

const ShoppingCart = () => {
  const cartList = useSelector(getCart);

  const dispatch = useDispatch();

  const formSubmit = async data => {
    try {
      await sendOrder(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeItemQuantity = (e, id) => {
    if (Number(e.target.value) === 0) {
      return (e.target.value = '1');
    }

    dispatch(changeQuantity({ id, value: e.target.value }));
  };

  const removeBtnHandler = id => {
    dispatch(removeItem(id));
    toast.info('Item removed from cart');
  };

  return (
    <Section>
      <OrderForm formSubmit={formSubmit}>
        <TotalPrice />
      </OrderForm>
      <Cart
        array={cartList}
        onChange={changeItemQuantity}
        onClick={removeBtnHandler}
      />
      <ToastContainer autoClose={1500} />
    </Section>
  );
};

export default ShoppingCart;
