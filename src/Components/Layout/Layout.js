import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',  
      }}
    >
      {/* Header */}
      <Navbar />

      {/* Main content area: grows to fill space */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer always at the bottom if content is short */}
      <Footer />
    </Box>
  );
};

export default Layout;
