import { StyledLink, Item, Title, List } from './ShopsList.styled';

const ShopsList = ({ shops, onClick }) => {
  return (
    <>
      <Title>Shops</Title>
      <List>
        {shops.map(shop => {
          return (
            <Item key={shop._id}>
              <StyledLink onClick={() => onClick(shop.name)}>
                {shop.name}
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default ShopsList;
