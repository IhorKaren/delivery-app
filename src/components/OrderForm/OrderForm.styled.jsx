import styled from 'styled-components';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 10px;
`;

const Thumb = styled.div`
  position: relative;
`;

const StyledField = styled(TextField)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;

  color: black;
  border: 1px solid black;
`;

export { Thumb, StyledField, StyledButton, StyledForm };
