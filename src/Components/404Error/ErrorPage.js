import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const ErrorPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
      <Box>
        <Box
        component="img"
        src='./404Logo.svg'
        alt="404 illustration"
        sx={{ maxWidth: "400px", width: "100%", mb: 3, mx: "auto" }}
      />

        <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
          Oops! Page Not Found
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button variant="contained" color="primary" href="/" sx={{ px: 4, py: 1.5 }}>
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;