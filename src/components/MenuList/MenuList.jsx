import { Card } from './MenuList.styled';

const MenuList = ({ array, onClick }) => {
  return (
    <>
      {array.map(burger => {
        return (
          <Card key={burger._id}>
            <img
              src={`https://s7d1.scene7.com/is/image/mcdonalds/${burger.img_path}`}
              width="220"
              alt={burger.name}
            />
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
