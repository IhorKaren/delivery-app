import CartList from 'components/CartList/CartList';
import { Thumb, Burgerlist } from './Cart.styled';

const Cart = ({ array, onChange, onClick }) => {
  return (
    <Thumb>
      <Burgerlist>
        <CartList array={array} onChange={onChange} onClick={onClick} />
      </Burgerlist>
    </Thumb>
  );
};

export default Cart;
