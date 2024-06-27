import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, CssBaseline, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const theme = useTheme();
  const logo = 'data:image/png;base64,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'; // Replace this with the actual path to your logo image
const navigate=useNavigate();
  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main, height: '100px', justifyContent: 'center' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="logo" style={{ height: '60px', marginRight: '10px',borderRadius:'30px' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Employee Management System
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Home
            </Button>
              <Button
              component={Link}
              to="/dashboard"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Employee Dashboard
            </Button>
            <Button
             component={Link}
              to="/form"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Registration Form
            </Button>
            <Button
             component={Link}
              to="/signup"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Signup
            </Button>

            <Button
             component={Link}
              to="/login"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
            >
              Login
            </Button>
            <Button
             component={Link}
              to="/login"
              sx={{
                color: theme.palette.common.white,
                fontWeight: 'bold',
                mx: 2,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.grey[300],
                },
              }}
              onClick={()=>{
localStorage.removeItem('token');
navigate('/');
              }}
            >
              Logout
            </Button>          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
