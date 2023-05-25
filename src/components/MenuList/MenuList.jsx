import defaultImage from '../NotFound/default-image.webp';

const MenuList = ({ array, onClick }) => {
  return (
    <>
      {array.map(burger => {
        return (
          <li key={burger._id}>
            <img src={defaultImage} width="300" alt="" />
            <h3>{burger.name}</h3>
            <p>Price: {burger.price}</p>
            <button onClick={() => onClick(burger)}>Add to cart</button>
          </li>
        );
      })}
    </>
  );
};

export default MenuList;
