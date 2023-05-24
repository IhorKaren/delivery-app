import { useSelector, useDispatch } from 'react-redux';
import { getCart, changeQuantity } from 'components/Redux/Cart/cart';
import sendOrder from 'services/sendOrder';
import OrderForm from 'components/OrderForm/OrderForm';
import Cart from 'components/Cart/Cart';
import TotalPrice from 'components/TotalPrice/TotalPrice';
import { Section } from './Pages.styled';

const ShoppingCart = () => {
  const cartList = useSelector(getCart);

  const dispatch = useDispatch();

  const changeItemQuantity = (e, id) => {
    if (Number(e.target.value) === 0) {
      return (e.target.value = '1');
    }

    dispatch(changeQuantity({ id, value: e.target.value }));
  };

  const formSubmit = async data => {
    try {
      await sendOrder(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Section>
      <OrderForm formSubmit={formSubmit}>
        <TotalPrice />
      </OrderForm>
      <Cart array={cartList} onChange={changeItemQuantity} />
    </Section>
  );
};

export default ShoppingCart;
