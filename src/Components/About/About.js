import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{p:3}}>
      <Grid container spacing={6} alignItems="center">
        {/* Left: Text */}
        <Grid item xs={12} md={6}>
          <Typography  sx={{ fontWeight: 600, mb: 3, fontSize:{xs:"1.25rem", sm:"1.5rem", md:"2rem",lg:"2.5rem"} }}>
            About Our Library
          </Typography>
       <Typography
  variant="body1"
  sx={{
    maxWidth: "450px",
    mb:3,   
    lineHeight: 1.8,
    textAlign: "justify"
  }}
>
  Our library has been a cornerstone of the community for over 50 years,
  providing access to thousands of books, digital resources, and community
  programs. Whether you’re looking for research materials, eBooks, or a quiet
  place to study, we welcome everyone to explore the world of knowledge.
</Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Library shelves"
            sx={{
              width: "100%",
              height: { xs: 250, md: 400 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>
      </Paper>
    </Container>
  );
};

export default About;
