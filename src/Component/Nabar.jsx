import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="absolute"  sx={{ boxShadow: 'none', bgcolor:'green' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Box display="flex" gap={2}>
            <Button color="inherit" href="#contact">
              Contact Me
            </Button>
            <Button color="inherit" href="#education">
              Education
            </Button>
            <Button color="inherit" href="#skills">
              Skills
            </Button>
            <Button color="inherit" href="#gallery">
              Gallery
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
