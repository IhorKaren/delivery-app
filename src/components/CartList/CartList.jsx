import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { StyledCard, CartMediaStyled, StyledMUIBtn } from './CartList.styled';

const CartList = ({ array, onChange, onClick }) => {
  return (
    <>
      {array.map(item => {
        return (
          <StyledCard key={item._id + item.shop} component="li">
            <CartMediaStyled
              component="img"
              src={`https://s7d1.scene7.com/is/image/mcdonalds/${item.img_path}`}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {item.name}
              </Typography>
              <Typography component="p" sx={{ marginBottom: '10px' }}>
                Price: {item.price * item.quantity}
              </Typography>
              <TextField
                id="standard-number"
                label="Count"
                type="number"
                defaultValue="1"
                onChange={e => onChange(e, item._id)}
                variant="standard"
                sx={{ width: '50px', marginBottom: '10px' }}
              />
              <Typography component="p">Shop: {item.shop}</Typography>
            </CardContent>
            <CardActions>
              <StyledMUIBtn
                startIcon={<DeleteIcon />}
                type="button"
                onClick={() => onClick(item._id)}
              >
                Remove
              </StyledMUIBtn>
            </CardActions>
          </StyledCard>
        );
      })}
    </>
  );
};

export default CartList;
