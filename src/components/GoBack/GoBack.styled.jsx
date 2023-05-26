import styled from 'styled-components';
import Button from '@mui/material/Button';

const GoBackBtn = styled(Button)`
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
  padding: 8px 12px;
  border-radius: 10px;

  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;

  color: black;
  border: 1px solid black;
`;

export { GoBackBtn };
