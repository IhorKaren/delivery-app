import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-right: auto;
`;

const StyledField = styled.input`
  display: flex;
  width: 230px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #00aeef;
  }
`;

const Error = styled.div`
  position: absolute;
  color: red;
  animation: ${appear} 500ms ease-in-out;
`;

const StyledButton = styled.button`
  background-color: royalblue;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: #2ba1e0;
  }
`;

export { StyledLabel, StyledField, Error, StyledButton, StyledForm };