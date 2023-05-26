import styled from 'styled-components';

const GoBackBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  background-color: royalblue;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  transition: background-color 200ms linear;

  &:hover {
    background-color: #2ba1e0;
  }
`;

export { GoBackBtn };
