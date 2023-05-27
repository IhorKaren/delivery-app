import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NewCard, StyledMUIBtn } from './MenuList.styled';

import BurgerSkeleton from 'components/Skeleton/BurgerSkeleton';

const MenuList = ({ array, onClick, loading }) => {
  const skeletonArray = Array.from(array, (_, index) => index);

  return (
    <>
      {loading
        ? BurgerSkeleton(skeletonArray)
        : array.map(burger => (
            <NewCard key={burger._id} component="li">
              <CardMedia
                component="img"
                src={`https://s7d1.scene7.com/is/image/mcdonalds/${burger.img_path}`}
                alt={burger.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {burger.name}
                </Typography>
                <Typography component="p">Price: {burger.price}</Typography>
              </CardContent>
              <CardActions>
                <StyledMUIBtn
                  size="small"
                  variant="outlined"
                  onClick={() => onClick(burger)}
                >
                  Add to cart
                </StyledMUIBtn>
              </CardActions>
            </NewCard>
          ))}
    </>
  );
};

export default MenuList;
