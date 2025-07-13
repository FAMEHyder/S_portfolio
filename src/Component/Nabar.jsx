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
  Tooltip,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import profile from '../image/00000.png'; // Replace with your image path

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Nabar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleclick = (path) => {
    navigate(path); // Or use scrollIntoView for smooth scroll
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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

          {/* Avatar on the left */}
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Siptain Kazmi" src={profile} sx={{ boxShadow: 2 }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ mt: '45px' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SIPTAIN
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              <MenuItem onClick={() => { handleclick(); handleCloseNavMenu(); }}>
                <Typography textAlign="center">Contact Me</Typography>
              </MenuItem>
              <MenuItem onClick={() => { window.location.href = '#education'; handleCloseNavMenu(); }}>
                <Typography textAlign="center">Education</Typography>
              </MenuItem>
              <MenuItem onClick={() => { window.location.href = '#skills'; handleCloseNavMenu(); }}>
                <Typography textAlign="center">Skills</Typography>
              </MenuItem>
              <MenuItem onClick={() => { window.location.href = '#gallery'; handleCloseNavMenu(); }}>
                <Typography textAlign="center">Gallery</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SIPTAIN
          </Typography>

          {/* Desktop Nav Buttons (hardcoded) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              onClick={()=>handleclick('./contact')}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
