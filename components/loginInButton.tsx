import * as React from 'react';
import Button from '@mui/joy/Button';

export default function BasicButtons() {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your desired functionality here
  };

  return (
    <Button onClick={handleClick} sx={{ width: 450, backgroundColor: '#F21D6B', '&:hover': { backgroundColor: '#FF4081' } }}>Log In</Button>
  );
}
