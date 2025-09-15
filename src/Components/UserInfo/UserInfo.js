import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

const UserInfoPage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // fetch user info from API
    async function fetchUser() {
      // simulate fetch
      const res = await fakeApiGetUser();
     setUser(res);
     setFormData(res);
    }
    fetchUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // validate...
    // send update
    await fakeApiUpdateUser(formData);
    setUser(formData);
    setIsEditing(false);
  };

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  if (!user) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Profile Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
          <Avatar
            sx={{ width: 100, height: 100, mb:2}}
            src={user.avatarUrl}
          >
            {user.name ? user.name[0] : ''}
          </Avatar>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.role || 'User'}
            </Typography>
          </Box>
          
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Profile Details Form / Display */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={handleChange('name')}
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              value={formData.phone}
              onChange={handleChange('phone')}
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              value={formData.location}
              onChange={handleChange('location')}
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="About Me"
              value={formData.about}
              onChange={handleChange('about')}
              fullWidth
              multiline
              rows={4}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
         <Divider sx={{ my: 3 }} />
         <Box sx={{ display:"flex",justifyContent:"center", alignItems:"center" }}>
            {isEditing ? (
              <Button
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>
            ) : (
              <Button
                startIcon={<EditIcon />}
                variant="outlined"
                onClick={handleEditClick}
              >
                Edit
              </Button>
            )}
          </Box>
      </Paper>
    </Container>
  );
};

// Example fake API
async function fakeApiGetUser() {
  return {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 1234567890',
    location: 'Mumbai, India',
    about: 'This is my bio.',
    avatarUrl: null,
    role: 'Member'
  };
}

async function fakeApiUpdateUser(updated) {
  console.log('Saving user:', updated);
  // simulate delay
  return new Promise(resolve => setTimeout(resolve, 1000));
}

export default UserInfoPage;
