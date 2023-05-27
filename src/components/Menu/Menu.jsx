import MenuList from 'components/MenuList/MenuList';
import { Thumb, Burgerlist } from './Menu.styled';

const Menu = ({ array, onClick, loading }) => {
  return (
    <Thumb>
      <Burgerlist>
        <MenuList array={array} onClick={onClick} loading={loading} />
      </Burgerlist>
    </Thumb>
  );
};

export default Menu;
