import styled from 'styled-components';

const Thumb = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  margin-left: 15px;
  padding-right: 15px;

  border: 2px solid black;
  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 25px;
  }
`;

const Burgerlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export { Thumb, Burgerlist };
