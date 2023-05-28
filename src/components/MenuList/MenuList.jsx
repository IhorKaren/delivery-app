import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { NewCard, StyledMUIBtn } from './MenuList.styled';
import { getCart } from 'components/Redux/Cart/cart';
import { useSelector } from 'react-redux';
import BurgerSkeleton from 'components/Skeleton/BurgerSkeleton';

const MenuList = ({ array, onClick, loading, activeShop }) => {
  const skeletonArray = Array.from(array, (_, index) => index);
  const cartList = useSelector(getCart);
  let shop = null;

  if (activeShop.length === 1) {
    shop = activeShop[0].name;
  }

  return (
    <>
      {loading
        ? BurgerSkeleton(skeletonArray)
        : array.map(burger => {
            const checkItem = cartList.some(
              el => el.name === burger.name && el.shop === shop
            );
            return (
              <NewCard key={burger._id} component="li">
                <CardMedia
                  component="img"
                  src={`https://s7d1.scene7.com/is/image/mcdonalds/${burger.img_path}`}
                  alt={burger.name}
                />
                <CardContent sx={{ paddingBottom: '30px' }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {burger.name}
                  </Typography>
                  <Typography component="p">Price: {burger.price}</Typography>
                </CardContent>
                <CardActions>
                  <StyledMUIBtn
                    startIcon={checkItem ? <DeleteIcon /> : null}
                    size="small"
                    variant="outlined"
                    onClick={() => onClick(burger)}
                  >
                    {checkItem ? 'Remove' : 'Add to cart'}
                  </StyledMUIBtn>
                </CardActions>
              </NewCard>
            );
          })}
    </>
  );
};

export default MenuList;
