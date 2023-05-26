import styled from 'styled-components';

const Section = styled.section`
  display: flex;
`;

const Thumb = styled.div`
  display: flex;
  min-width: 220px;
  height: 100vh;
  position: relative;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
`;

export { Section, Thumb };
