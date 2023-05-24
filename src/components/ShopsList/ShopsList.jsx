import { StyledLink, Title, Thumb, List } from './ShopsList.styled';

const ShopsList = ({ shops }) => {
  return (
    <Thumb>
      <Title>Shops</Title>
      <List>
        {shops.map(shop => {
          return (
            <li to={`/shops/${shop.name}`} key={shop._id}>
              <p>
                <StyledLink>{shop.name}</StyledLink>
              </p>
            </li>
          );
        })}
      </List>
    </Thumb>
  );
};

export default ShopsList;
