import axios from 'axios';

const getBurgers = async () => {
  try {
    const response = await axios.get(
      'https://burger-so6y.onrender.com/burgers'
    );
    return response.data;
  } catch (error) {}
};

export default getBurgers;
