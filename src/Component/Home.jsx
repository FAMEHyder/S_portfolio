import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
} from "@mui/material";
import landscape from '../image/12.jpg';
import profilePic from '../image/1.jpeg'; // 👈 Add your overlay image here

export default function HeroHome() {
    return (
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
            <Container maxWidth="lg">
                <Stack spacing={4} alignItems="center" textAlign="center">

                    {/* Foreground Image (on top of landscape) */}
                    <Box
                        component="img"
                        src={profilePic}
                        alt="Profile"
                        sx={{
                            width: { xs: 120, md: 160 },
                            height: { xs: 120, md: 160 },
                            borderRadius: '50%',
                            border: '4px solid white',
                            boxShadow: 3,
                        }}
                    />

                    {/* Gradient Heading */}
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            background: "linear-gradient(to right, #E0E0E0, #0ece37ff, #FAFAFA, #ba0fefff, #E0E0E0)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "gradient 6s linear infinite",
                            "@keyframes gradient": {
                                "0%": { backgroundPosition: "0% center" },
                                "100%": { backgroundPosition: "200% center" },
                            },
                        }}
                    >
                        SYED SIBTAIN KAZMI          
                        </Typography>

                    {/* Subheading */}
                    <Typography variant="h6" color="white" maxWidth="md">
                        I'm a visual storyteller who turns pixels into purpose. With a keen eye
                        for balance, typography, and color, I design more than just "pretty
                        things" — I craft meaningful experiences. Whether it's branding, web UI,
                        or print, I bring clarity to chaos and creativity to every click.
                    </Typography>

                    {/* CTA Buttons */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    px: 4,
                                    textTransform: "none",
                                }}
                            >
                                Start Building →
                            </Button>
                        </Grid>
                        <Grid item>
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
                                Schedule Demo
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
