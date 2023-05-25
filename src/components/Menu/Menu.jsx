import MenuList from 'components/MenuList/MenuList';
import { Thumb, Burgerlist } from './Menu.styled';

const Menu = ({ array, onClick }) => {
  return (
    <Thumb>
      <Burgerlist>
        <MenuList array={array} onClick={onClick} />
      </Burgerlist>
    </Thumb>
  );
};

export default Menu;
