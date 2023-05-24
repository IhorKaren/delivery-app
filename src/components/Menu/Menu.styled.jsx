import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Burgerlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 20px;
  padding: 15px;
  list-style: none;
`;

export { Thumb, Burgerlist };
