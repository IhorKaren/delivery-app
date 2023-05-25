import { StyledLink, Item, Title, Thumb, List } from './ShopsList.styled';

const ShopsList = ({ shops, onClick }) => {
  return (
    <Thumb>
      <Title>Shops</Title>
      <List>
        {shops.map(shop => {
          return (
            <Item to={`/shops/${shop.name}`} key={shop._id}>
              <p>
                <StyledLink onClick={() => onClick(shop.name)}>
                  {shop.name}
                </StyledLink>
              </p>
            </Item>
          );
        })}
      </List>
    </Thumb>
  );
};

export default ShopsList;
