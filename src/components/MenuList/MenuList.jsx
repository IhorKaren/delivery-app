import { Card } from './MenuList.styled';
import defaultImage from '../NotFound/default-image.webp';

const MenuList = ({ array, onClick }) => {
  return (
    <>
      {array.map(burger => {
        return (
          <Card key={burger._id}>
            <img src={defaultImage} width="300" alt="" />
            <h3>{burger.name}</h3>
            <p>Price: {burger.price}</p>
            <button onClick={() => onClick(burger)}>Add to cart</button>
          </Card>
        );
      })}
    </>
  );
};

export default MenuList;
