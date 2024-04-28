import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl'; // Ensure this is imported
import FormLabel from '@mui/joy/FormLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/joy/IconButton';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password-input">Password</FormLabel>
      <Input
        id="password-input"
        color="neutral"
        type={showPassword ? 'text' : 'password'}
        sx={{ backgroundColor: 'white' }}
        placeholder=""
        endDecorator={
          <IconButton
            onClick={togglePasswordVisibility}
            color="neutral"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
              height: 'auto',
              zIndex: 1,
            }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        }
      />
    </FormControl>
  );
}
