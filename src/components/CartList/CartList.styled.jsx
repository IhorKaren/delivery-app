import styled, { keyframes } from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  height: 200px;
  padding: 0;
  flex-basis: calc((100% - 20px) / 2);
  
  animation: ${fadeIn} 0.5s ease-in;
`;

const CartMediaStyled = styled(CardMedia)`
  width: 200px;
`;

const StyledMUIBtn = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  
  color: black;
  border: 1px solid black;
`;

export { StyledCard, CartMediaStyled, StyledMUIBtn };
