import styled from 'styled-components';

const Thumb = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  margin-left: 15px;

  border: 2px solid black;
  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e4e4e;
    border-radius: 25px;
  }
`;

const Burgerlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0;
  gap: 20px;
  list-style: none;
`;

const Message = styled.div`
  padding-top: 40%;
  margin: auto;
`;

export { Thumb, Burgerlist, Message };
