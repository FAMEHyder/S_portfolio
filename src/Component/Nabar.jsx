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
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <IconButton onClick={() => navigate('/')} sx={{ p: 0 }}>
              <Avatar alt="Siptain Kazmi" src={profile} sx={{ boxShadow: 2 }} />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Button
                fullWidth
                onClick={() => {
                  handleclick('./contact');
                  handleCloseNavMenu();
                }}
              >
                Contact Me
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  window.location.href = '#education';
                  handleCloseNavMenu();
                }}
              >
                Education
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  window.location.href = '#skills';
                  handleCloseNavMenu();
                }}
              >
                Skills
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  window.location.href = '#gallery';
                  handleCloseNavMenu();
                }}
              >
                Gallery
              </Button>
            </Menu>
          </Box>

          {/* Desktop Nav Buttons (centered) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              onClick={() => handleclick('./contact')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact Me
            </Button>
            <Button
              onClick={() => (window.location.href = '#education')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Education
            </Button>
            <Button
              onClick={() => (window.location.href = '#skills')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Skills
            </Button>
            <Button
              onClick={() => (window.location.href = '#gallery')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Gallery
            </Button>
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
