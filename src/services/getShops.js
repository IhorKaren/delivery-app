import axios from 'axios';

const getShops = async () => {
  try {
    const response = await axios.get(
      `https://burger-so6y.onrender.com/shops`
    );
    return response.data;
  } catch (error) {}
};

export default getShops;
