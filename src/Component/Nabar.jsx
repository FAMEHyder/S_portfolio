import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Avatar,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import pro from '../image/00000.png'


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          boxShadow: 'none',
          background: 'linear-gradient(90deg, #1e3c72 0%, #98802aff 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Profile Picture (clickable) */}
            <Box>
              <Avatar
                alt="Profile Picture"
                src={pro} // Update with your image path
                sx={{ width: 48, height: 48, cursor: 'pointer' }}
                onClick={handleOpen}
              />
            </Box>

            {/* Navigation Buttons */}
            <Box display="flex" gap={2}>
              <Button color="inherit" href="#contact">Contact Me</Button>
              <Button color="inherit" href="#education">Education</Button>
              <Button color="inherit" href="#skills">Skills</Button>
              <Button color="inherit" href="#gallery">Gallery</Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Popup Dialog with Full Image */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={pro}
            alt="Profile Full"
            style={{ width: '100%', display: 'block', borderRadius: 4 }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
