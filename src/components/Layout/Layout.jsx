import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ color: 'black', backgroundColor: '#FFFFFF' }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              paddingTop: '15px',
              gap: '20px',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: '700' }}
            >
              Delivery App
            </Typography>
            <div>
              <Button
                component={NavLink}
                to="/"
                sx={{ color: 'inherit', fontWeight: '600' }}
              >
                Shop
              </Button>
              <Button
                component={NavLink}
                to="/order"
                sx={{ color: 'inherit', fontWeight: '600' }}
              >
                Shopping cart
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
