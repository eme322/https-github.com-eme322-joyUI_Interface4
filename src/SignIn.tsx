// SignIn.tsx
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Typography from '@mui/joy/Typography';

export default function SignIn() {
  return (
    <Box
      component="form"
      sx={{
        width: '100%', // Adjust the width as necessary
        maxWidth: '400px', // Set a max-width for larger screens
        mx: 'auto', // Center the form horizontally
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography level="h1" sx={{ mb: 2 }}>
        Welcome to Boardx!
      </Typography>
      <TextField
        fullWidth
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Button
        fullWidth
        variant="solid"
        size="lg" // Adjust the size as necessary
        sx={{ mt: 2 }}
      >
        Sign In
      </Button>
      <Button
        fullWidth
        variant="text"
        size="md" // Adjust the size as necessary
        sx={{ mt: 1 }}
      >
        Forgot Password
      </Button>
    </Box>
  );
}
