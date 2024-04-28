import * as React from 'react';
import Input from '@mui/joy/Input';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton'; // Use IconButton for icon buttons


export default function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      color="neutral"
      type={showPassword ? 'text' : 'password'}
      sx={{ backgroundColor: 'white' }}
      placeholder=""
      endDecorator={
        <IconButton
          onClick={togglePasswordVisibility}
          color="neutral"
          sx={{
            color: 'text.secondary', // Set icon color for better visibility
            '&:hover': {
              color: 'primary.main', // Change icon color on hover
            },
            // Ensure the icon button does not overflow the Input's height
            height: 'auto',
            // Ensure the button is positioned on top of any overlapping elements
            zIndex: 1,
          }}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      }
    />
  );
}


/*
export default function InfoBar() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      color="neutral"
      type={showPassword ? 'text' : 'password'}
      sx={{ backgroundColor: 'white' }}
      placeholder=""
      endDecorator={
        <Button
          onClick={togglePasswordVisibility}
          color="neutral"
          size="sm"
          sx={{
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            backgroundColor: 'white'
          }}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </Button>
      }
    />
  );
}
*/
