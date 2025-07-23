import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import profile from '../image/00000.png'; // Make sure this path is valid

export default function Nabar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
    background: 'linear-gradient(90deg, #020e4aff)',
    zIndex: 1300,
  }}

    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleClick('/')} sx={{ p: 0 }}>
              <Avatar
                alt="Sibtain Kazmi"
                src={profile}
                sx={{
                  width: 44,
                  height: 44,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </IconButton>
          </Box>

          {/* Brand name */}
          <Typography
            variant="h6"
            onClick={() => handleClick('/')}
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1px',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'color 0.3s',
              '&:hover': {
                color: '#ffd580',
              },
            }}
          >
            SIBTAIN
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
