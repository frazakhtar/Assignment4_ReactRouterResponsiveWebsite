import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import QuickAccess from './QuickAccess';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{p:3}}>
            <Typography variant="h2" align='center' sx={{mb:2}}>Welcome to Online Library</Typography>
                <SearchBar />
               <Carousel />
                <QuickAccess />
        </Paper>
    </Container>
  )
}

export default HomePage