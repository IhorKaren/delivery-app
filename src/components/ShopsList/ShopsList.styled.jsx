import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin-top: 30px;
  padding-top: 10px;
  border: solid black 2px;
  border-radius: 10px;
`;

const Title = styled.h1`
  display: inline-block;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: color 200ms linear;

  :hover {
    color: royalblue;
  }
`;

export { StyledLink, Item, Title, Thumb, List };
