import MenuList from 'components/MenuList/MenuList';
import { Thumb, Burgerlist } from './Menu.styled';

const Menu = ({ array, onClick, loading, activeShop }) => {
  return (
    <Thumb>
      <Burgerlist>
        <MenuList
          array={array}
          onClick={onClick}
          loading={loading}
          activeShop={activeShop}
        />
      </Burgerlist>
    </Thumb>
  );
};

export default Menu;
