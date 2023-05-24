import axios from 'axios';

const sendOrder = async orderData => {
  try {
    await axios.post(
      'https://burgerbackend.herokuapp.com/orders',
      orderData
    );
  } catch (error) {
    // console.error(error);
  }
};

export default sendOrder;
