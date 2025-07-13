import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import backgroundImageUrl from '../image/11.jpeg';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          'service_bko45nn',
          'template_kuu4qem',
          {
            to_name: 'IYEF',
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
          alert('Failed to send the message, please try again.');
        });
    },
  });

  return (
    <Box>
      {/* Top Image Banner */}
      <Box
        sx={{
          height: { xs: 180, md: 250 },
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          mb: 4,
        }}
      />

      {/* Two-column layout */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4, background: 'linear-gradient(180deg, #ffffff, #f4f6f8)' }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Get in Touch
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  sx={{ mt: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: '1rem',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Contact Info
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 3 }}>
                <EmailIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="span">
                  Syedsibtain@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <PhoneIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="span">
                  +92 3234232323232 +92 32324234234
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="span">
                  Skardu Baltistan
                </Typography>
              </Box>

              <Box>
                <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="span">
                  Services available 24/7
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
