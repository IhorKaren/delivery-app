import defaultImage from '../NotFound/default-image.webp';
import { Thumb, Burgerlist } from './Menu.styled';

const Menu = ({ burgers, onClick }) => {
  return (
    <Thumb>
      <Burgerlist>
        {burgers.map(burger => {
          return (
            <li key={burger._id}>
              <img src={defaultImage} width="300" alt="" />
              <h3>{burger.name}</h3>
              <p>Price: {burger.price}</p>
              <button onClick={() => onClick(burger)}>Add to cart</button>
            </li>
          );
        })}
      </Burgerlist>
    </Thumb>
  );
};

export default Menu;
