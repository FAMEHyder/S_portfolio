import {Box,Button,Container,Typography,Grid,Card, CardContent, CardMedia,CardActionArea} from "@mui/material";
import { motion } from 'framer-motion';

import landscape from '../image/12.jpg';
import logo from '../image/logo.png';
import ProfilePic from '../image/sib.png'
import landing1 from '../image/12.jpg';
import ecommerce from '../image/12.jpg';
import portfolio from '../image/12.jpg';
import mobileapp from '../image/12.jpg';
import dashboard from '../image/12.jpg';
import blog from '../image/12.jpg';


export default function Home() {

    const skills = [
        {
            title: 'Photoshop',
            image: 'https://img.icons8.com/color/96/adobe-photoshop--v1.png',
        },
        {
            title: 'Logo Design',
            image: logo,
        },
        {
            title: 'Banner & Poster',
            image: 'https://img.icons8.com/color/96/poster.png',
        },
        {
            title: 'Social Media Posts',
            image: 'https://img.icons8.com/color/96/facebook-like.png',
        },
        {
            title: 'Creative Layouts',
            image: 'https://img.icons8.com/color/96/design.png',
        },
        {
            title: 'Typography',
            image: 'https://img.icons8.com/color/96/font.png',
        },
        {
            title: 'Branding',
            image: 'https://img.icons8.com/color/96/brand.png',
        },
    ];


    const educationData = [
        {
            title: 'Matriculation',
            school: 'City Public School and College',
            year: '2019-2020',
            image: '/images/matric.jpg', // replace with your local/hosted image path
        },
        {
            title: 'Intermediate ',
            school: 'Degree College Skardu',
            year: '2021-2022',
            image: '/images/fsc.jpg',
        },
        {
            title: 'BS  Economics',
            school: 'Boys Degree College Skardu',
            year: '2023-Continue',
            image: '/images/bs.jpg',
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                type: 'spring',
                stiffness: 50,
            },
        }),
    };


    const designs = [
  {
    title: 'Landing Page - SaaS',
    image: landing1,
  },
  {
    title: 'E-commerce UI',
    image: ecommerce,
  },
  {
    title: 'Portfolio UI',
    image: portfolio,
  },
  {
    title: 'Mobile App Design',
    image: mobileapp,
  },
  {
    title: 'Admin Dashboard',
    image: dashboard,
  },
  {
    title: 'Blog Template',
    image: blog,
  },
];


    return (
        <Box>
            <Box
                component="section"
                py={{ xs: 8, md: 12 }}
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${landscape})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    zIndex: 0,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: -1,
                    },
                }}
            >
                <Container sx ={{widtrh : '50%'}}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        gap={4}
                    >
                        {/* Left Box: Text Content */}
                        <Box flexGrow={1}>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    background: "linear-gradient(to right, #E0E0E0, #1e3c72, #FAFAFA, #dca138, #E0E0E0)",
                                    backgroundSize: "200% auto",
                                    fontWeight:800,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    animation: "gradient 6s linear infinite",
                                    "@keyframes gradient": {
                                        "0%": { backgroundPosition: "0% center" },
                                        "100%": { backgroundPosition: "200% center" },
                                    },
                                }}
                            >
                                SYED SIBTAIN KAXMI
                            </Typography>

                            <Typography variant="h6" color="white" mt={2} justifyContent={'space-around'}>
                                I'm a creative and detail-driven Graphics Designer specializing in Photoshop-based design work,
                                including logo creation, banners, peak to your audience. Whether you need
                                eye-catching marketing mesenc sense and
                                a fast turnaround to every project. Let’s collaborate and make your brand stand out!
                            </Typography>

                            <Box mt={3} display="flex" gap={2} flexWrap="wrap">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ px: 4, textTransform: "none" }}
                                >
                                    Build your Design →
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        textTransform: "none",
                                        borderColor: "grey.700",
                                        color: "grey.300",
                                        "&:hover": {
                                            borderColor: "grey.500",
                                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                                        },
                                    }}
                                >
                                    WhatsApp
                                </Button>
                            </Box>
                        </Box>

                        {/* Right Box: Profile Image */}
                        <Box sx={{width:'50%'}} >
                            <Box
                                component="img"
                                src={ProfilePic}
                                alt="Profile"
                                sx={{
                                    width: '88vh',
                                    height: '90vh',
                                    // borderRadius: '5%',
                                    borderBottom: '2px solid white',
                                    // boxShadow: 4,
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>



            {/* skills section  */}

            <Box
                sx={{

                    p: 4,
                    background: 'linear-gradient(to bottom, #121646ff, #131951ff, #141b5fff, #15233aff)',
                    color: 'white',
                    boxShadow: 4,
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
                    My Design Skills
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                    Crafting creative visuals from concept to completion.
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card sx={{ textAlign: 'center', borderRadius: 2, p: 2 }}>
                                    <CardMedia
                                        component="img"
                                        image={skill.image}
                                        alt={skill.title}
                                        sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{skill.title}</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Education section  */}

            <Box id="education" sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
                    🎓 My Education
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {educationData.map((edu, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <Card elevation={4} sx={{ borderRadius: 4 }}>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={edu.image}
                                        alt={edu.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold">
                                            {edu.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="caption" display="block" mt={1}>
                                            {edu.year}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Gallery section  */}
            <Box py={10} px={3} sx={{ backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        My Best Designs
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" mb={4}>
        A selection of my top UI/UX and front-end designs
      </Typography>

      <Grid container spacing={4} justifyContent={'center'}>
        {designs.map((design, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={9}
              sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '5px 5px 5px 5px gray',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={design.image}
                  alt={design.title}
                  height="240"
                />
               
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        </Box>
    );
}
