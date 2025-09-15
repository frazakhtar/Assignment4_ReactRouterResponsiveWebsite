import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const QuickAccess = () => {
  const items = ['Borrow', 'eBooks', 'Membership', 'Hours'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        py: 2,
        flexWrap: 'wrap',
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <Typography
            sx={{
              cursor: 'pointer',
              '&:hover': { color: 'primary.main', textDecoration: 'underline' },
            }}
          >
            {item}
          </Typography>
          {index < items.length - 1 && <Divider orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default QuickAccess;
