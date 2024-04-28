import * as React from 'react';
import Input from '@mui/joy/Input';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/joy/Button';

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
      placeholder="Password"
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
