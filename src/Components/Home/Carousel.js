import { Box, IconButton, Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
const items = [
  {
    title: 'New Arrivals',
    description: 'Latest books in our library.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Popular Books',
    description: 'Top books people are reading.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Staff Picks',
    description: 'Our favorites this month.',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);


 const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (<>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 300,
        overflow: 'hidden',
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            height: '100%',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(${(index - activeIndex) * 100}%)`,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              width: '100%',
              p: 2,
            }}
          >
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  </>)
};

export default Carousel