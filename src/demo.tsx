import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Demo: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: 4
      }}
    >
      <img src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" alt="Logo" width="80" height="80" />
      <Typography variant="h4" component="h1" sx={{ margin: 2 }}>
        Welcome to Boardx!
      </Typography>
      <Box component="form" sx={{ width: '100%', maxWidth: '360px' }}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          variant="outlined"
          type="password"
        />
        <Button
          sx={{
            marginTop: 2,
            backgroundColor: '#E91E63',
            ':hover': {
              backgroundColor: '#AD1457',
            },
            color: '#fff',
            paddingY: '10px',
            borderRadius: '20px',
          }}
          fullWidth
          variant="contained"
        >
          Sign In
        </Button>
        <Typography
          sx={{ cursor: 'pointer', textAlign: 'center', marginY: 2 }}
          color="text.secondary"
        >
          Forgot Password
        </Typography>
      </Box>
    </Box>
  );
};

export default Demo;

