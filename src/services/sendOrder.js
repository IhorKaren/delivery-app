import axios from 'axios';

const sendOrder = async orderData => {
  try {
    await axios.post('https://burger-so6y.onrender.com/orders', orderData);
  } catch (error) {}
};

export default sendOrder;
