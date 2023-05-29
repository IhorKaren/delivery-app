import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  gap: 15px;
  flex-direction: column;
  list-style: none;
  padding: 15px;
`;

const Item = styled.li`
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 200ms linear;
  white-space: nowrap;

  animation: ${fadeIn} 0.5s ease-in;

  :hover {
    background-color: rgba(33, 150, 243, 0.5);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(33, 150, 243, 0.5);
    `}
`;

export { StyledLink, Item, Title, List };
