import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: '64px',
          paddingBottom: '14px',
          backgroundColor: '#FFFFFF',
        }}
      >
        {children}
      </Container>
    </React.Fragment>
  );
}
