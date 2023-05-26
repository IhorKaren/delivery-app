import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

  :hover {
    background-color: #bdbdbd;
  }
`;

export { StyledLink, Item, Title, List };
