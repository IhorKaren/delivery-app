import { useSelector } from 'react-redux';
import { getCart } from 'Redux/Cart/cart';
import { StyledTotalPrice } from './TotalPrice.styled';

const TotalPrice = () => {
  const cartList = useSelector(getCart);

  const getTotalPrice = () => {
    return cartList.reduce((acc, el) => {
      return (acc += el.quantity * el.price);
    }, 0);
  };

  return <StyledTotalPrice>Total price: {getTotalPrice()}</StyledTotalPrice>;
};

export default TotalPrice;
