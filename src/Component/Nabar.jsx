import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import profile from '../image/00000.png'; // Update with your actual image path

export default function Nabar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleclick = (path) => {
    navigate(path);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #1e3c72 0%, #98802aff 100%)',
        boxShadow: 3,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Avatar on the left — routes to home */}
          <Box sx={{ flexGrow: 1, mr: 2 }}>
            <IconButton onClick={() => navigate('/')} sx={{ p: 0 }}>
              <Avatar alt="Siptain Kazmi" src={profile} sx={{ boxShadow: 2 }} />
            </IconButton>
          </Box>

      

          {/* SIPTAIN Logo — aligned right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              
              onClick={() => handleclick('./')}
              
              sx={{
                ml: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              SIBTAIN
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
