import axios from 'axios';

const getShops = async () => {
  try {
    const response = await axios.get(
      `https://burgerbackend.herokuapp.com/shops`
    );
    return response.data;
  } catch (error) {}
};

export default getShops;
