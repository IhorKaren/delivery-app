import styled, { keyframes } from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NewCard = styled(Card)`
  padding: 0;
  flex-basis: calc((100% - 60px) / 4);
  animation: ${fadeIn} 0.5s ease-in;
`;

const StyledMUIBtn = styled(Button)`
  margin-left: auto;
  color: black;
  border: 1px solid black;
`;

export { NewCard, StyledMUIBtn };
