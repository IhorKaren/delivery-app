import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { ToastContainer, toast } from 'react-toastify';
import Map from 'components/Map/Map';
import Geocode from 'react-geocode';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCart,
  changeQuantity,
  removeItem,
} from 'components/Redux/Cart/cart';
import sendOrder from 'services/sendOrder';
import OrderForm from 'components/OrderForm/OrderForm';
import Cart from 'components/Cart/Cart';
import Loader from 'components/Loader/Loader';
import { Section, Thumb } from './Shopping.card.styled';

const KEY = 'AIzaSyAZv5czqJS_HE97JG_DlvnmPj5BdMU_8S8';

const ShoppingCart = () => {
  const [address, setAddress] = useState('');

  const cartList = useSelector(getCart);
  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: KEY,
  });

  const formSubmit = async data => {
    try {
      if (data.order.length === 0) {
        toast.error(
          `To submit an order, you must add the item to your shopping cart.`
        );
        return;
      }

      await sendOrder(data);

      toast.success(`Thank you, your order has been processed.`);
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

  const handleMarkerAdd = event => {
    Geocode.setApiKey(KEY);

    const { lat, lng } = event.latLng;
    Geocode.fromLatLng(lat(), lng())
      .then(response => {
        const address = response.results[0].formatted_address;
        setAddress(address);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Section>
      <Thumb>
        {!isLoaded ? (
          <Loader />
        ) : (
          <Map onClick={handleMarkerAdd} address={address} />
        )}
        <OrderForm formSubmit={formSubmit} initialAddress={address}></OrderForm>
      </Thumb>
      <Cart
        array={cartList}
        onChange={changeItemQuantity}
        onClick={removeBtnHandler}
        address={address}
      />
      <ToastContainer autoClose={2000} />
    </Section>
  );
};

export default ShoppingCart;
