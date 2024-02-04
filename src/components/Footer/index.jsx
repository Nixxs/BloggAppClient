import * as React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3, // Padding Y-axis
        px: 2, // Padding X-axis
        mt: 'auto', // Margin Top Auto
        backgroundColor: (theme) => theme.palette.background.grey,
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={3} 
          direction="row" 
          justifyContent="center" 
          alignItems="center" // Center content vertically in the container
        >
          <Grid item xs={12} sm={6} md={4} // Adjust the size as needed
            sx={{
              textAlign: 'center', // Center text alignment
            }}
          >
            <Typography variant="h6" color="textPrimary" gutterBottom>
              IOD BLOG
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A place to share knowledge and ideas.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
