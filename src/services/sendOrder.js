import axios from 'axios';

const sendOrder = async orderData => {
  try {
    await axios.post('https://burger.herokuapp.com/orders', orderData);
  } catch (error) {}
};

export default sendOrder;
