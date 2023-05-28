import CartList from 'components/CartList/CartList';
import { Thumb, Burgerlist, Message } from './Cart.styled';

const Cart = ({ array, onChange, onClick }) => {
  return (
    <Thumb>
      <Burgerlist>
        {array.length === 0 ? (
          <Message>You have not added an item to your shopping cart yet</Message>
        ) : (
          <CartList array={array} onChange={onChange} onClick={onClick} />
        )}
      </Burgerlist>
    </Thumb>
  );
};

export default Cart;
