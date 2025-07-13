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
import emailjs from 'emailjs-com';
import backgroundImageUrl from '../image/11.jpeg';

const ContactUs = () => {
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
    <Box mt={12}>
      {/* Header Image */}
      <Box
        sx={{
          height: { xs: 180, md: 250 },
          width: '100%',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          mb: 4,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Form Section */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Send a Message
              </Typography>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
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
                  label="Message"
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
                    mt: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <EmailIcon color="primary" sx={{ mr: 1 }} />
                <Typography>Syedsibtain@gmail.com</Typography>
              </Box>

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon color="primary" sx={{ mr: 1 }} />
                <Typography>+92 323 4232323, +92 323 24234234</Typography>
              </Box>

              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography>Skardu, Baltistan</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                <Typography>Available 24/7</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
