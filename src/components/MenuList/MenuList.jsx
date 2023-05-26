import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { NewCard, StyledMUIBtn } from './MenuList.styled';

const MenuList = ({ array, onClick }) => {
  return (
    <>
      {array.map(burger => {
        return (
          <NewCard key={burger._id}>
            <CardMedia
              component="img"
              src={`https://s7d1.scene7.com/is/image/mcdonalds/${burger.img_path}`}
              width="220"
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
        );
      })}
    </>
  );
};

export default MenuList;
