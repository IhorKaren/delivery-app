import Skeleton from '@mui/material/Skeleton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NewCard, StyledMUIBtn } from '../MenuList/MenuList.styled';

const baseArray = [1, 2, 3, 4, 5, 6, 7, 8];

const BurgerSkeleton = () => {
  return (
    <>
      {baseArray.map((_, index) => (
        <NewCard key={index} component="li">
          <Skeleton variant="rectangular" width={280} height={270} />{' '}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Skeleton variant="text" width={120} />{' '}
            </Typography>
            <Typography component="p">
              <Skeleton variant="text" width={80} />{' '}
            </Typography>
          </CardContent>
          <CardActions>
            <StyledMUIBtn size="small" variant="outlined">
              <Skeleton variant="text" width={100} />{' '}
            </StyledMUIBtn>
          </CardActions>
        </NewCard>
      ))}
    </>
  );
};

export default BurgerSkeleton;
