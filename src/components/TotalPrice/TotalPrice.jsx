import { useSelector } from 'react-redux';
import { getCart } from 'components/Redux/Cart/cart';

const TotalPrice = () => {
  const cartList = useSelector(getCart);

  const getTotalPrice = () => {
    return cartList.reduce((acc, el) => {
      return (acc += el.quantity * el.price);
    }, 0);
  };

  return <div>Total price: {getTotalPrice()}</div>;
};

export default TotalPrice;
