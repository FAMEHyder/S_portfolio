import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Paper } from "@mui/material";
import { motion } from 'framer-motion';
import pogo from '../image/77.png'

import landscape from '../image/SIB.jpg';
import logo from '../image/logo.png';
import ProfilePic from '../image/sib.png'
import landing1 from '../image/12.jpg';
import ecommerce from '../image/12.jpg';
import portfolio from '../image/12.jpg';
import mobileapp from '../image/12.jpg';
import dashboard from '../image/12.jpg';
import blog from '../image/12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

 



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


    const experiences = [
        {
            role: 'Graphic Designer',
            company: 'Netbots Pvt. Ltd.',
            duration: 'Dec 2023 – Present',
            highlights: [
                'Led design and branding for Netbots and its clients across software, hospitality, and education industries.',
                'Created compelling visuals including logos, social media posts, posters, and marketing content.',
                'Worked on high-impact projects for brands like Harriot Skardu and educational campaigns in Baltistan.',
                'Ensured consistent visual identity across all platforms, increasing audience engagement and brand trust.',
            ],
        },
        {
            role: 'Graphic Designer (Contract)',
            company: 'Rinor',
            duration: '2022-2023',
            highlights: [
                'Designed professional product mockups, packaging, and promotional materials.',
                'Delivered design assets tailored to Rinor’s branding and marketing needs.',
                'Maintained clear communication with their team to ensure timely and on-brand delivery.',
            ],
        },
        {
            role: 'Freelance Graphic Designer',
            company: 'Remote / Multiple Clients',
            duration: '2022 – Present',
            highlights: [
                'Collaborated with local and international clients on logo design, social media graphics, and branding.',
                'Provided creative direction and complete visual solutions for startups and small businesses.',
                'Known for adaptability, clean design, and strong visual storytelling.',
            ],
        },
    ];

    return (
        <Box>
            <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: { xs: 'center', md: 'left' },
      px: 2,
      py: 4,
    }}
    gap={4}
  >
    {/* Left Side: Text Content */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(to right, #E0E0E0, #1e3c72, #FAFAFA, #dca138, #E0E0E0)",
          backgroundSize: "200% auto",
          fontWeight: 800,
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

      <Typography variant="h6" color="white" mt={2}>
        I’m a passionate and detail-driven graphic designer with over 3 years of experience in creating impactful visual designs. Currently, I’m working as a Senior Graphic Designer at Netbots, where I lead branding and visual design projects for various clients across different industries.
        <br /><br />
        My expertise lies in logo design, brand identity, social media posts, marketing materials, and print design. I believe in blending creativity with clarity to deliver designs that not only look beautiful but also communicate effectively.
        <br /><br />
        I’ve worked with startups, businesses, and organizations to craft visuals that build trust and leave lasting impressions.
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
          href="https://wa.me/923407620765"
          target="_blank"
          rel="noopener noreferrer"
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

    {/* Right Side: Profile Image */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
      <Box
        component="img"
        src={ProfilePic}
        alt="Profile"
        sx={{
          width: '50vh',
          height: '50vh',
          borderRadius: '50%',
          border: '6px solid white',
          boxShadow: 4,
          objectFit: 'contain',
        }}
      />
    </Box>
  </Box>



            {/* skills section  */}

            <Box
                sx={{

                    p: 4,
                    color: 'white',
                    boxShadow: 4,
                    bgcolor:'#eaeaea'
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" color="#545fc4" fontFamily={'poppin-bold'}>
                    My Design Skills
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center" color="#545fc4">
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

            {/* Experiance section  */}
            <Box component="section" py={6} px={{ xs: 2, md: 6 }} bgcolor="#f8f9fa">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Graphic Design Experience
                </Typography>
                <Grid container spacing={4} >
                    {experiences.map((exp, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ p: 3, borderRadius: 2, height: '100%' , width:'100%'}}>
                            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' , width:'100%', background: 'linear-gradient(90deg, #545fc4 , #120343ff)',color:'white'}}>
                                <Typography variant="h6" fontWeight="bold">
                                    {exp.role}
                                </Typography>
                                <Typography variant="subtitle1" color="white">
                                    {exp.company} | {exp.duration}
                                </Typography>
                                <ul style={{ marginTop: 10 }}>
                                    {exp.highlights.map((point, idx) => (
                                        <li key={idx}>
                                            <Typography variant="body2">{point}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* Education section  */}

            <Box id="education" sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: '#545fc4' }}>
                <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
                    🎓 My Education
                </Typography>
                {/* main grid  */}
                <Grid height={'300px'}  display={'flex'}>
                    <Grid  width={'50%'} display={'flex'} flexDirection={'column'}>
                        <Box  width={'100%'} height={'100px'}  > {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white"/>} <Typography  color = {'white'} sx={{ml:'40px'}}> <strong>Becholar of Science</strong> <br />Boys Degrre College Skardu <br /> 2023-present</Typography></Box>
                        <Box  width={'100%'} height={'100px'}> {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white"/>} <Typography  color = {'white'} sx={{ml:'40px'}}> <strong>FA </strong> <br />Boys Degrre College Skardu <br /> 2021-2023</Typography></Box>
                        <Box  width={'100%'} height={'100px'}> {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white"/>} <Typography  color = {'white'} sx={{ml:'40px'}}> <strong>Metriculation</strong> <br />City public school skardu <br /> 2019-2021</Typography></Box>
                    </Grid>

                    <Grid border={'2px solid red'} width={'50%'}
                    component={'img'}
                    src={pogo}
                    ></Grid>
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

                <Grid >
                    <Box display={'flex'} width={'100%'}>
                        <Box
                            component={'img'}
                            src={designs[0].image}
                            height={'494px'}
                            width={"50%"}
                        />

                        {/* this is the main box */}
                        <Box  height={'500px'} width={'50%'} >
                            {/* subbox one  */}
                            <Grid  height={'250px'} width={'100%'} display={'flex'} justifyContent={'space-around'}>
                                <Box height={'244px'} width={'48%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                                <Box  height={'244px'} width={'48%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                            </Grid>


                            {/* Subbox two  */}
                            <Grid  height={'250px'} width={'100%'} display={'flex'} justifyContent={'space-around'}>
                                <Box  height={'244px'} width={'48%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                                <Box height={'244px'} width={'48%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                            </Grid>
                        </Box>
                    </Box>
                </Grid>

                {/* This is the next grid  */}
                <Grid mt= {10} >
                    <Box display={'flex'} width={'100%'} >
                        <Typography width={'40%'} >  fugiat aliquam voluptates quod, mollitia maiores! Impedit esse rerum quibusdam nisi. Id perferendis labore non sint nisi minima ut optio eaque voluptate consequatur quas fugit fuga deleniti nemo corporis aut, tempore, magnam unde rerum quibusdam! Quae reiciendis placeat, explicabo ex id assumenda tenetur. Ut labore eius ratione consectetur culpa aliquam. Fuga labore veritatis, architecto placeat eveniet recusandae inventore enim suscipit esse unde illum temporibus consequatur nam exercitationem possimus! Debitis, modi. Nisi similique eum officia! Nobis vero totam possimus veniam voluptatum, enim ab dolore alias! In, error quis veniam sed officia soluta commodi qui beatae dolor delectus ad modi impedit odio similique quod ea corrupti totam nemo dolorum expedita minus consequatur? Aliquam, perspiciatis. Exercitationem aspernatur rem, architecto officiis debitis officia saepe nulla explicabo consectetur iure, facilis hic modi temporibus nemo! </Typography>

                        {/* this is the main box */}
                        <Box  height={'500px'} width={'60%'} display={'flex'} >
                            {/* subbox one  */}
                            <Grid  height={'100%'} width={'60%'} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} >
                                <Box height={'49%'} width={'98%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                                <Box  height={'49%'} width={'98%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                            </Grid>


                            {/* Subbox two  */}
                            <Grid  height={'100%'} width={'100%'} display={'flex'} justifyContent={'space-around'}>
                                <Box  height={'100%'} width={'100%'}
                                    component={'img'}
                                    src={designs[0].image}
                                />
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}
