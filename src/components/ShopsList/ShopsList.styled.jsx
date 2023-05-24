import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-end;
  padding-top: 20px;
  padding-left: 50px;
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

export { StyledLink, Title, Thumb, List };
