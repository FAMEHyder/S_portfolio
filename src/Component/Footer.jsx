import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import backgroundImageUrl from '../image/11.jpeg';

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          'service_bko45nn',
          'template_kuu4qem',
          {
            to_name: 'SIBTAIN',
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          'Gpm47Cw5Xb3Vf2MI3'
        )
        .then(() => {
          alert('Message sent successfully!');
          resetForm();
        })
        .catch(() => {
          alert('Failed to send the message. Please try again.');
        });
    },
  });

  return (
    <Box
      mt={12}
      sx={{
        background: 'linear-gradient(90deg, #0f0c29, #302b63, #24243e)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 8,
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4,  backgroundColor:'transparent' }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom color='white'>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 3, backgroundColor: '#fff' }} />

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <EmailIcon color="White" sx={{ mr: 1 ,color: 'white'}} />
                <Typography color="White">Syedsibtain@gmail.com</Typography>
              </Box>

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon color="White" sx={{ mr: 1 ,color: 'white'}} />
                <Typography color="White">+92 323 4232323, +92 323 24234234</Typography>
              </Box>

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon  sx={{ mr: 1 ,color: 'white'}} />
                <Typography color="White">Skardu, Baltistan</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon color="White" sx={{ mr: 1 ,color: 'white'}} />
                <Typography color="White">Available 24/7</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom color= 'white'>
                Follow Us
              </Typography>
              <Divider sx={{ mb: 3, backgroundColor: '#fff' }} />
              <Box display="flex" gap={2}>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      color: '#1877f2',
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      color: '#1da1f2',
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      color: '#0a66c2',
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      color: '#e1306c',
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body2" color="#ddd">
            &copy; {new Date().getFullYear()} SYED SIBTAIN kAXMI  | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
