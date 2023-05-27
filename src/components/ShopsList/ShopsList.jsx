import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { StyledLink, Item, Title, List } from './ShopsList.styled';

const ShopsList = ({ shops, onClick, loading }) => {
  return (
    <>
      <Title>Shops</Title>
      <List>
        {loading
          ? Array.from({ length: 3 }, (_, index) => (
              <Item key={index}>
                <Skeleton variant="text" width={186} height={36} />
              </Item>
            ))
          : shops.map(shop => (
              <Item key={shop._id}>
                <StyledLink onClick={() => onClick(shop.name)}>
                  {shop.name}
                </StyledLink>
              </Item>
            ))}
      </List>
    </>
  );
};

export default ShopsList;
