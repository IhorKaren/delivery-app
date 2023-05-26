import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            paddingTop: '15px',
            gap: '20px',
          }}
        >
          <Typography variant="h6" component="div">
            Delivery App
          </Typography>
          <div>
            <Button component={NavLink} to="/" color="inherit">
              Shop
            </Button>
            <Button component={NavLink} to="/order" color="inherit">
              Shopping cart
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
