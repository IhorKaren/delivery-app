import styled from 'styled-components';

const GoBackBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
  padding: 8px 12px;
  border-radius: 10px;

  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  background-color: #000000;
  color: white;

  border: none;
  transition: color 200ms linear, background-color 200ms linear;

  &:hover {
    color: black;
    background-color: #bdbdbd;
  }
`;

export { GoBackBtn };
