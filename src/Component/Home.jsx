import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Grid,
} from "@mui/material";

export default function HeroHome() {

  
  
    return (
    <Box component="section" py={{ xs: 8, md: 12 }}>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
          {/* Gradient Heading */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(to right, #E0E0E0, #9FA8DA, #FAFAFA, #7986CB, #E0E0E0)",
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
            AI-driven tools for product teams
          </Typography>

          {/* Subheading */}
          <Typography variant="h6" color="text.secondary" maxWidth="md">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
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
