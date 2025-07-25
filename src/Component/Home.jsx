import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Paper } from "@mui/material";
import { motion } from 'framer-motion';
import pogo from '../../public/image/qq.png'

import landscape from '../../public/image/SIB.jpg';
import logo from '../../public/image/logo.png';
import ProfilePic from '../../public/image/sib.png'

import landing1 from '../../public/Designes/bg.png';
import des1 from '../../public/Designes/aa.png';
import des3 from '../../public/Designes/asa.png';
import des2 from '../../public/Designes/kal.png';
import des4 from '../../public/Designes/cg.png';
import des5 from '../../public/Designes/qq.png';

import bg from '../../public/Designes/bg.jpg';

import blog from '../../public/image/12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '@fontsource/poppins/700.css'; // Only bold (700 weight)



const float = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const pulse = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const rotate = {
    animate: {
        rotate: [0, 360],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
        },
    },
};


const scrollOpenVariant = (index) => ({
    hidden: {
        width: 100,
        opacity: 0,
    },
    visible: {
        width: '100%',
        opacity: 1,
        zIndex: 1,
        transition: {
            duration: 5,
            delay: index * 0,
            ease: 'easeOut',
        },
    },
});




const slideInLoop = {
    animate: {
        x: [0, -30, 0],
        opacity: [1, 0.7, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

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
            image: '/images/matric.jpg', 
        },
        {
            title: 'Intermediate / FA / F',
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
            image: des1,
        },
        {
            title: 'Portfolio UI',
            image: des2,
        },
        {
            title: 'Mobile App Design',
            image: des3,
        },
        {
            title: 'Admin Dashboard',
            image: des4,
        },
        {
            title: 'Blog Template',
            image: des5,
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
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        zIndex: -1,
                    },
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        px: 2,
                        py: 4,
                        width: '100%',
                    }}
                    gap={4}
                >
                    {/* Left Side: Text Content */}
                    <Box sx={{ flex: 1, width: '100%', ml: { xs: 0, sm: 0, md: '20px' } }}>
                        <Box maxWidth="100%">
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    background: "linear-gradient(to right, #E0E0E0, #1e3c72, #FAFAFA, #dca138, #E0E0E0)",
                                    backgroundSize: "190% auto",
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

                            <Typography variant="h6" color="white" mt={2} sx={{ width: '100%' }}>
                                I’m a passionate and detail-driven graphic designer with over 3 years of experience in creating impactful visual designs. Currently, I’m working as a Senior Graphic Designer at Netbots, where I lead branding and visual design projects for various clients across different industries.
                                <br /><br />
                                My expertise lies in logo design, brand identity, social media posts, marketing materials, and print design. I believe in blending creativity with clarity to deliver designs that not only look beautiful but also communicate effectively.

                            </Typography>
                        </Box>

                        {/* Buttons */}
                        <Box mt={3} display="flex" gap={2} flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }}>
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

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '10px' }}>
                        <motion.div {...float}>
                            <Box
                                component="img"
                                src={ProfilePic}
                                alt="Profile"
                                sx={{
                                    width: '70vh',
                                    height: '70vh',
                                    borderRadius: '20%',
                                    border: '6px solid white',
                                    boxShadow: 4,
                                    objectFit: 'contained',
                                }}
                            />
                        </motion.div>
                    </Box>
                </Box>

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
                    <Box width={'100%'}>
                        
                            <Box
                                component={'img'}
                                src={designs[0].image}
                                width={"90%"}
                                boxShadow={'2px 2px 2px 2px black'}
                                sx={{
                                    ml:{xs:'10px',md:'60px'},
                                    height:{xs:'100px',md:'300px'},
                                    transition: 'transform 0.4s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Slight zoom
                                        cursor: 'pointer',
                                    }
                                }}
                            />
                       



                        {/* this is the main box */}

                    </Box>
                </Grid>

                {/* This is the next grid  */}

                <Box display="flex" width="100%" justifyContent={'space-between'} mt={10}>

                    {/* Text Section with animation */}
                    <Box width={'35%'} mt={"12vh"} ml={'40px'}>
                        <Typography sx={{ fontWeight: 800, fontSize: '30px', fontFamily: 'Poppins, sans-serif', color: '#003296', display: 'flex', justifyContent: 'start', textAlign: 'left', width: '100%' }}>Designed to stand out because average never gets noticed</Typography> <br />
                        <Typography>
                            In a digital world full of noise, design is what makes you seen — and remembered.
                            These social media posts aren’t just pretty visuals; they’re built to engage, connect, and convert.
                            From bold typography to strategic color use, every element is crafted with purpose.
                            Because in the world of content, blending in is never an option.
                        </Typography>
                    </Box>


                    {/* Image Section with animation */}
                    <motion.div style={{ width: '60%' }} {...pulse}>
                        <Box height="450px" width="90%" display="flex" sx={{ ml: '10px' }}>

                            {/* Subbox one */}
                            <Grid height="100%" width="60%" display="flex" flexDirection="column" justifyContent="space-around">
                                <Box
                                    height="49%"
                                    width="98%"
                                    component="img"
                                    src={designs[1].image}
                                    sx={{ objectFit: 'contained', borderRadius: 2 }}
                                />
                                <Box
                                    height="49%"
                                    width="98%"
                                    component="img"
                                    src={designs[2].image}
                                    sx={{ objectFit: 'contained', borderRadius: 2 }}
                                />
                            </Grid>

                            {/* Subbox two */}
                            <Grid height="100%" width="100%" display="flex" justifyContent="space-around">
                                <Box
                                    height="100%"
                                    width="100%"
                                    component="img"
                                    src={designs[3].image}
                                    sx={{ objectFit: 'contained', borderRadius: 2 }}
                                />
                            </Grid>
                        </Box>
                    </motion.div>
                </Box>

            </Box>

            {/* skills section  */}

            <>
                <Typography
                    fontSize={30}
                    fontWeight={800}
                    textAlign="center"
                    mb={2}
                    mt={4}
                    width="100%"
                >
                    My Designing Skills
                </Typography>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    bgcolor="#f8f9fa"
                    height="80vh"
                    sx={{ display: 'flex' }}
                >
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} mt={2}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.div {...pulse}>
                                    <Card
                                        sx={{
                                            textAlign: 'center',
                                            borderRadius: 2,
                                            p: 2,
                                            height: '100%',
                                        }}
                                    >
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
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </>


            {/* Experiance section  */}

            <Box component="section" py={6} px={{ xs: 2, md: 6 }} bgcolor="#f8f9fa">
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }} >
                    Graphic Design Experience
                </Typography>
                <Grid container spacing={4}>
                    {experiences.map((exp, index) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={index}
                            sx={{ p: 3, borderRadius: 2, width: '100%' }}
                        >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={scrollOpenVariant(index)}
                                style={{
                                    overflow: 'hidden',
                                    borderRadius: 12,
                                }}
                            >
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        background: 'linear-gradient(90deg, #120343ff)',
                                        color: 'white',
                                    }}
                                >
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
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Education section  */}

            <Box id="education"
                sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center top -100px', width: '96%', ml: 3, borderRadius: '6px' }}
            >
                <Typography variant="h4" align="center" gutterBottom fontWeight={700} color="white">
                    {<FontAwesomeIcon icon={faGraduationCap} size="1x" color="white" />} My Education
                </Typography>
                {/* main grid  */}
                <Grid height={'300px'} display={'flex'}>
                    <Grid width={'50%'} display={'flex'} flexDirection={'column'}>
                        <Box width={'100%'} height={'100px'} display={'flex'}> {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white" />} <Typography color={'white'} sx={{ ml: '10px' }}> <strong>Becholar of Science</strong> <br />Boys Degrre College Skardu <br /> 2023-present</Typography></Box>
                        <Box width={'100%'} height={'100px'} display={'flex'}> {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white" />} <Typography color={'white'} sx={{ ml: '10px' }}> <strong>FA </strong> <br />Boys Degrre College Skardu <br /> 2021-2023</Typography></Box>
                        <Box width={'100%'} height={'100px'} display={'flex'}> {<FontAwesomeIcon icon={faGraduationCap} size="2x" color="white" />} <Typography color={'white'} sx={{ ml: '10px' }}> <strong>Metriculation</strong> <br />City public school skardu <br /> 2019-2021</Typography></Box>
                    </Grid>

                </Grid>
            </Box>


        </Box>
    );
}


