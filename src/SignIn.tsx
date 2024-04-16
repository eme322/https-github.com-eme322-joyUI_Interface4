// SignIn.tsx
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Typography from '@mui/joy/Typography';

// You might need to find Joy UI equivalents or custom solutions if not available
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/joy/IconButton'; // Adjust if Joy has an equivalent
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const SignIn: React.FC = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted', values);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography level="h4" component="h1" gutterBottom>
        Welcome to Boardx!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={values.email}
          onChange={handleChange('email')}
          sx={{ my: 2 }} // Adjusting vertical margins via sx prop
        />
        <TextField
          name="password"
          label="Password"
          type={values.showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange('password')}
          sx={{ mb: 2 }} // Adjusting bottom margin via sx prop
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Forgot Password
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
